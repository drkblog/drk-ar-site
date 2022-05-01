// UI Setup
const code = document.querySelector("#code");
const canvas = document.querySelector("#canvas");
const message = document.querySelector("#message");
const runButton = document.querySelector("#run");
const resetButton = document.querySelector("#reset");
const loadButton = document.querySelector("#load");
const saveButton = document.querySelector("#save");

// Game setup
const board = new sidila.GameBoard();
const canvasPainter = new sidila.CanvasPainter(canvas, board.scene);

// Game status
let tree;
let instructions = 0;
let gameTicks = 0;


// UI Actions
runButton.addEventListener("click", async (event) => {
  runButton.disabled = true;
  try {
    run(code.value.toString());
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
  code.value = localStorage.getItem('sidila.program');
});
saveButton.addEventListener("click", async (event) => {
  localStorage.setItem('sidila.program', code.value);
});


// Game
function run(code) {
  tree = sidila.parse(code);
  instructions = tree.elements.length;
  gameTicks = 0;
}

function reset() {
  tree = undefined;
  instructions = 0;
  board.reset();
}

function tick() {
  canvasPainter.paint(board);
  const finished = board.isCrashed() || board.isDone();
  if (gameTicks < instructions && !finished) {
    message.innerHTML = `Ejecutando paso #${gameTicks}`;
    sidila.StepInterpreter.processStatement(tree, gameTicks, board);
    gameTicks++;
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