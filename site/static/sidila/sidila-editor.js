// UI Setup
const code = document.querySelector("#code");
const canvas = document.querySelector("#canvas");
const palette = document.querySelector("#palette");
const message = document.querySelector("#message");
const loadButton = document.querySelector("#load");
const resetButton = document.querySelector("#reset");

// Game setup
const board = new sidila.EditorBoard();
let canvasPainter;
let palettePainter;


// UI Actions
loadButton.addEventListener("click", async (event) => {
  board.load(code.value.toString());
  canvasPainter = new sidila.CanvasPainter(canvas, board.scene.theme);
  palettePainter = new sidila.PalettePainter(palette, board.scene);
  tick(); // Start animation
});

palette.addEventListener("mousemove", async (event) => {
  palettePainter.mouseOver(event.offsetX, event.offsetY);
});

// Paint
function tick() {
  canvasPainter.paint(board);
  palettePainter.paint();
  window.requestAnimationFrame(tick);
}

