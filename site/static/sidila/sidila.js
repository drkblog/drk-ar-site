// UI Setup
const sourceCode = document.querySelector("#sourceCode");
const canvas = document.querySelector("#canvas");
const message = document.querySelector("#message");
const runButton = document.querySelector("#run");
const resetButton = document.querySelector("#reset");
const loadButton = document.querySelector("#load");
const saveButton = document.querySelector("#save");

// Game setup
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
    console.log(e);
    runButton.disabled = false;
  }
});
resetButton.addEventListener("click", async (event) => {
  reset();
  runButton.disabled = false;
});
loadButton.addEventListener("click", async (event) => {
  sourceCode.value = localStorage.getItem('sidila.program');
});
saveButton.addEventListener("click", async (event) => {
  localStorage.setItem('sidila.program', sourceCode.value);
});


// Game
function run(code) {
  tree = sidila.parse(code);
  interpreter = new sidila.StepInterpreter(board, tree);
  interpreter.subscribeToStep((event) => {
    sourceCode.setSelectionRange(event.location.start, event.location.end);
  });
}

function reset() {
  tree = undefined;
  gameTicks = 0;
  board.reset();
}

function tick() {
  canvasPainter.paint(board);
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

setInterval(tick, 500);