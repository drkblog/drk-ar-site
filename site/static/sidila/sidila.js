// UI Setup
const sourceCode=document.querySelector("#sourceCode");
const canvas=document.querySelector("#canvas");
const message=document.querySelector("#message");
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


const codeMirror = CodeMirror.fromTextArea(sourceCode);
codeMirror.setOption('lineNumbers', true);
const codeMirrorHelper = new sidila.CodeMirrorHelper(codeMirror, 'debug-line', 'error-line');

// Game setup
let tickPeriod = 200;
const board = new sidila.GameBoard();
const canvasPainter = new sidila.CanvasPainter(canvas, board.scene);
let interpreter;
let heartbeat;
let stepByStep = false;

// Game status
let tree;
let gameTicks = 0;
let started = false;

// UX
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
  started = false;
  refreshUi();
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
  board.setSound(sound.checked);
});
mapSelector.addEventListener("change", async (event) => {
  reset();
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
  interpreter = new sidila.StepInterpreter(board, tree);
  interpreter.subscribeToStep((event) => {
    if (highlight.checked) {
      codeMirrorHelper.highlight(event.location);
    }
  });
  resetHeartbeat();
  board.start();
}

function reset() {
  clearHeartbeat();
  tree = undefined;
  interpreter = null;
  gameTicks = 0;
  board.reset(mapSelector.value);
  codeMirrorHelper.clearHighlight();
}

function tick() {
  const finished = board.isCrashed() || board.isDone();
  if (interpreter != null && !interpreter.isFinished() && !finished) {
    gameTicks++;
    message.innerHTML = `Ejecutando paso #${gameTicks}`;
    interpreter.tick();
  } else {
    if (board.isCrashed()) {
      message.innerHTML = `Perdiste`;
    } else if (board.isDone()) {
      const lines = codeMirror.lineCount();
      const score = new sidila.Score().getScore(lines, board);
      message.innerHTML = `Ganaste con ${score} puntos`;
    } else {
      message.innerHTML = `No llegaste a la salida`;
    }
    clearHeartbeat();
  }
}

function paint() {
  canvasPainter.paint(board, performance.now());
  window.requestAnimationFrame(paint);
}

reset();
refreshUi();
paint(); // Start painting
