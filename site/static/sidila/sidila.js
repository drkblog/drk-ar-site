// Game setup
const boardSide = 12;
const board = new sidila.Board(boardSide);

// Game status
let tree;
let instructions = 0;
let gameTicks = 0;

// UI Setup
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const canvas = document.querySelector("#canvas");
const message = document.querySelector("#message");
const runButton = document.querySelector("#run");
runButton.addEventListener("click", async (event) => {
  run(code.value.toString());
});

const canvasPainter = new sidila.CanvasPainter(canvas, 24);

// Game
function run(code) {
  board.reset();
  tree = sidila.parse(code);
  console.log(tree);
  instructions = tree.elements.length;
  gameTicks = 0;
}

function tick() {
  canvas.innerHTML = canvasPainter.paint(board);
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