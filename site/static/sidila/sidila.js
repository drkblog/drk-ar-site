// UI Setup
const sourceCode=document.querySelector("#sourceCode");
const canvas=document.querySelector("#canvas");
const message=document.querySelector("#message");
const periodSelector=document.querySelector("#periodSelector");
const periodText=document.querySelector("#periodText");
const runButton=document.querySelector("#run");
const resetButton=document.querySelector("#reset");
const loadButton=document.querySelector("#load");
const saveButton=document.querySelector("#save");
const loadFilename=document.querySelector("#loadFilename");
const saveFilename=document.querySelector("#saveFilename");
const saveOverwrite=document.querySelector("#saveOverwrite");
const errorMessage=document.querySelector("#errorMessage");


// Game setup
let tickPeriod = 200;
const board = new sidila.GameBoard();
const canvasPainter = new sidila.CanvasPainter(canvas, board.scene);
let interpreter;
let heartbeat;

// Game status
let tree;
let gameTicks = 0;

// UI Actions
runButton.addEventListener("click", async (event) => {
  runButton.disabled = true;
  errorMessage.style.display = 'none';
  try {
    run(sourceCode.value.toString());
  } catch (e) {
    errorMessage.innerHTML = e.message;
    errorMessage.style.display = 'block';
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
periodSelector.addEventListener("change", async (event) => {
  tickPeriod = periodSelector.options[periodSelector.selectedIndex].value;
  refreshUi();
});

function reloadProgramList() {
  sidila.Storage.loadFiles(loadFilename);
}
function refreshUi() {
  reloadProgramList();
  periodText.innerHTML = tickPeriod;
  clearInterval(heartbeat);
  heartbeat = setInterval(tick, tickPeriod); // Start game heartbeat
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
