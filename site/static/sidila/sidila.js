// UI Setup
const sourceCode=document.querySelector("#sourceCode");
const canvas=document.querySelector("#canvas");
const message=document.querySelector("#message");
const scoreBanner=document.querySelector("#score");
const periodSelector=document.querySelector("#periodSelector");
const periodText=document.querySelector("#periodText");
const runButton=document.querySelector("#run");
const resetButton=document.querySelector("#reset");
const stepButton=document.querySelector("#step");
const loadButton=document.querySelector("#load");
const saveButton=document.querySelector("#save");
const loadFilename=document.querySelector("#loadFilename");
const saveFilename=document.querySelector("#saveFilename");
const saveOverwrite=document.querySelector("#saveOverwrite");
const sound=document.querySelector("#sound");
const highlight=document.querySelector("#highlight");
const errorMessage=document.querySelector("#errorMessage");
const mapSelector=document.querySelector("#mapSelector");
const pair=document.querySelector("#pair");
const sections=document.querySelectorAll(".section");
const container=document.querySelector(".container");


const codeMirror = CodeMirror.fromTextArea(sourceCode);
codeMirror.setOption('lineNumbers', true);
const codeMirrorHelper = new sidila.CodeMirrorHelper(codeMirror, 'debug-line', 'error-line');

// Game setup
let tickPeriod = 200;
const control = new sidila.Control(codeMirror, canvas);
control.subscribeToStep((event) => {
  if (highlight.checked) {
    codeMirrorHelper.highlight(event.location);
  }
  message.innerHTML = `Ejecutando paso #${event.gameTicks}`;
});
control.subscribeToScore((score) => {
  scoreBanner.innerHTML = score;
});
control.subscribeToGameFinished((gameResult) => {
  switch (gameResult) {
    case sidila.GameResult.Died:
      message.innerHTML = `Perdiste`;
      break;
    case sidila.GameResult.Won:
      message.innerHTML = `Ganaste`;
      break;
    default:
      message.innerHTML = `No llegaste a la salida`;
  }
});

let heartbeat;
let stepByStep = false;

// Game status
let tree;
let started = false;

// UX
const originalMaxWidth = container.style['max-width'];
const storageManager = new sidila.Storage();
const programListHandler = new sidila.ProgramListDropDownHandler(storageManager, loadFilename);

// UI Actions
runButton.addEventListener("click", async (event) => {
  started = true;
  refreshUi();
  errorMessage.style.display = 'none';
  codeMirrorHelper.clearError();
  try {
    run(codeMirror.getValue());
  } catch (e) {
    started = false;
    errorMessage.innerHTML = e.message;
    errorMessage.style.display = 'block';
    codeMirrorHelper.markError(e.message);
    refreshUi();
  }
});
stepButton.addEventListener("click", async (event) => {
  tick();
});
resetButton.addEventListener("click", async (event) => {
  reset();
});
loadButton.addEventListener("click", async (event) => {
  try {
    const code = programListHandler.getSelectedProgram();
    if (code != undefined) {
      codeMirror.setValue(code);
    }
  } catch(e) {
    // Ignore
  }
});
saveButton.addEventListener("click", async (event) => {
  try {
    storageManager.saveProgram(saveFilename.value, codeMirror.getValue(), saveOverwrite);
    reloadProgramList();
    saveOverwrite.checked = false;
  } catch (e) {
    alert(e);
  }
});
periodSelector.addEventListener("change", async (event) => {
  tickPeriod = periodSelector.options[periodSelector.selectedIndex].value;
  stepByStep = tickPeriod == 0;
  refreshUi();
  resetHeartbeat();
});
sound.addEventListener("change", async (event) => {
  control.setSound(sound.checked);
});
mapSelector.addEventListener("change", async (event) => {
  reset();
});
pair.addEventListener("change", async (event) => {
  refreshUi();
});

function reloadProgramList() {
  programListHandler.loadFiles();
}
function refreshUi() {
  reloadProgramList();
  periodText.innerHTML = (stepByStep) ? '(paso a paso)' : tickPeriod;
  stepButton.disabled = !stepByStep || !started;
  runButton.disabled = started;
  mapSelector.disabled = started;
  loadButton.disabled = started;
  saveButton.disabled = started;
  codeMirror.setOption('readOnly', started);
  if (pair.checked === true) {
    container.style['max-width'] = 'inherit';
    sections.forEach(element => {
      element.classList.add('pair');
    }); 
  } else {
    sections.forEach(element => {
      element.classList.remove('pair');
    }); 
    container.style['max-width'] = originalMaxWidth;
  }
}
function resetHeartbeat() {
  clearHeartbeat();
  if (!stepByStep) {
    heartbeat = setInterval(tick, tickPeriod); // Start game heartbeat
  } else {
    heartbeat = null;
  }
}
function clearHeartbeat() {
  clearInterval(heartbeat);
}

// Game
function run(code) {
  tree = sidila.parse(code);
  control.run(tree);
  resetHeartbeat();
}

function reset() {
  clearHeartbeat();
  tree = undefined;
  codeMirrorHelper.clearHighlight();
  control.reset(mapSelector.value);
  started = false;
  refreshUi();
}

function tick() {
  if (control.isRunning()) {
    control.tick();
  } else {
    clearHeartbeat();
    setTimeout(() => reset(), 1000);
  }
}

function paint() {
  control.paint(performance.now());
  window.requestAnimationFrame(paint);
}

reset();
refreshUi();
paint(); // Start painting
