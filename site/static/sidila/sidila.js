// Game setup
const boardSide = 12;
const board = new sidila.Board(boardSide, new sidila.Player(1, 1, sidila.CardinalDirection.East));

// Game status
let tree;
let instructions = 0;
let gameTicks = 0;

// UI Setup
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const canvas = document.querySelector("#canvas");
const runButton = document.querySelector("#run");
runButton.addEventListener("click", async (event) => {
  run(code.value.toString());
});

const canvasPainter = new sidila.CanvasPainter(canvas, 24);

// Game
function run(code) {
  tree = sidila.parse(code);
  console.log(tree);
  instructions = tree.elements.length;
  gameTicks = 0;
}

function tick() {
  canvas.innerHTML = canvasPainter.paint(board);
  if (gameTicks < instructions && !board.isCrashed()) {
    sidila.Game.processStatement(tree, gameTicks, board);
    gameTicks++;
  }
}


setInterval(tick, 1000);