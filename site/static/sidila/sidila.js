// UI Setup
const sourceCode=document.querySelector("#sourceCode");
const canvas=document.querySelector("#canvas");
const message=document.querySelector("#message");
const periodText=document.querySelector("#periodText");
const runButton=document.querySelector("#run");
const resetButton=document.querySelector("#reset");
const loadButton=document.querySelector("#load");
const saveButton=document.querySelector("#save");
const loadFilename=document.querySelector("#loadFilename");
const saveFilename=document.querySelector("#saveFilename");
const saveOverwrite=document.querySelector("#saveOverwrite");

// Game setup
let tickPeriod = 200;
const board = new sidila.GameBoard();
const canvasPainter = new sidila.CanvasPainter(canvas, board.scene);
let interpreter;

// Game status
let tree;
let gameTicks = 0;

// UI Actions
runButton.addEventListener("click", async (event) => {
  runButton.disabled = true;
  try {
    run(sourceCode.value.toString());
  } catch (e) {
    alert(e);
    runButton.disabled = false;
  }
});
resetButton.addEventListener("click", async (event) => {
  reset();
  runButton.disabled = false;
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
function reloadProgramList() {
  sidila.Storage.loadFiles(loadFilename);
}
function refreshUi() {
  reloadProgramList();
  periodText.innerHTML = tickPeriod;
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
  gameTicks = 0;
  board.reset();
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
      message.innerHTML = `Ganaste`;
    } else {
      message.innerHTML = `No llegaste a la salida`;
    }
  }
}

function paint() {
  canvasPainter.paint(board);
  window.requestAnimationFrame(paint);
}

refreshUi();
paint(); // Start painting
setInterval(tick, tickPeriod); // Start game heartbeat