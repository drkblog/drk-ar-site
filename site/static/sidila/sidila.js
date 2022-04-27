// Game setup
const boardSide = 12;
const board = new sidila.Board(boardSide, new sidila.Player(1, 1, sidila.CardinalDirection.East));

// Game status
let tree;
let instructions = 0;
let gameTicks = 0;

// Game
function run(code) {
  tree = sidila.maps.parse(code);
  instructions = tree.elements.length;
  console.log(tree);
  gameTicks = 0;
}

function tick() {
  canvas.innerHTML = sidila.BasicPainter.paint(board);
  if (gameTicks < instructions && !board.isCrashed()) {
    sidila.Game.processStatement(tree, gameTicks, board);
    gameTicks++;
  }
}

// UI Setup
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const canvas = document.querySelector("#canvas");
const runButton = document.querySelector("#run");
runButton.addEventListener("click", async (event) => {
  run(code.value.toString());
});

setInterval(tick, 1000);