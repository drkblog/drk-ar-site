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
const errorMessage=document.querySelector("#errorMessage");
const mapSelector=document.querySelector("#mapSelector");


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

// UI Actions
runButton.addEventListener("click", async (event) => {
  started = true;
  refreshUi();
  errorMessage.style.display = 'none';
  try {
    run(sourceCode.value.toString());
  } catch (e) {
    started = false;
    errorMessage.innerHTML = e.message;
    errorMessage.style.display = 'block';
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
  sidila.Storage.loadProgram(loadFilename, sourceCode);
});
saveButton.addEventListener("click", async (event) => {
  try {
    sidila.Storage.saveProgram(saveFilename, sourceCode, saveOverwrite);
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
  sidila.Storage.loadFiles(loadFilename);
}
function refreshUi() {
  reloadProgramList();
  periodText.innerHTML = (stepByStep) ? '(paso a paso)' : tickPeriod;
  stepButton.disabled = !stepByStep || !started;
  runButton.disabled = started;
}
function resetHeartbeat() {
  clearInterval(heartbeat);
  if (!stepByStep) {
    heartbeat = setInterval(tick, tickPeriod); // Start game heartbeat
  } else {
    heartbeat = null;
  }
}

// Game
function run(code) {
  tree = sidila.parse(code);
  interpreter = new sidila.StepInterpreter(board, tree);
  interpreter.subscribeToStep((event) => {
    sourceCode.setSelectionRange(event.location.start, event.location.end);
  });
  sourceCode.focus();
}

function reset() {
  tree = undefined;
  interpreter = null;
  gameTicks = 0;
  board.reset(mapSelector.value);
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
      const lines = sourceCode.value.toString().split(",").length;
      const score = new sidila.Score().getScore(lines, board);
      message.innerHTML = `Ganaste con ${score} puntos`;
    } else {
      message.innerHTML = `No llegaste a la salida`;
    }
  }
}

function paint() {
  canvasPainter.paint(board);
  window.requestAnimationFrame(paint);
}

reset();
refreshUi();
resetHeartbeat();
paint(); // Start painting
