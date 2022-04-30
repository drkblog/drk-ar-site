// UI Setup
const code = document.querySelector("#code");
const canvas = document.querySelector("#canvas");
const message = document.querySelector("#message");
const loadButton = document.querySelector("#load");
const resetButton = document.querySelector("#reset");

// Game setup
const board = new sidila.EditorBoard();
let canvasPainter;


// UI Actions
loadButton.addEventListener("click", async (event) => {
  board.load(code.value.toString());
  canvasPainter = new sidila.CanvasPainter(canvas, board.theme);
  tick(); // Start animation
});

// Paint
function tick() {
  canvas.innerHTML = canvasPainter.paint(board);
  window.requestAnimationFrame(tick);
}

