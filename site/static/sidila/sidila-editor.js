// UI Setup
const sourceCode = document.querySelector("#code");
const editorCanvas = document.querySelector("#editorCanvas");
const paletteCanvas = document.querySelector("#paletteCanvas");
const message = document.querySelector("#message");
const hoverSprite = document.querySelector("#hoverSprite");
const selectedSprite = document.querySelector("#selectedSprite");
const loadButton = document.querySelector("#load");
const saveButton = document.querySelector("#save");
const resetButton = document.querySelector("#reset");

// Editor setup
const board = new sidila.EditorBoard();
let canvasPainter;
let palettePainter;


// UI Actions
loadButton.addEventListener("click", async (event) => {
  board.load(sourceCode.value.toString());
  canvasPainter = new sidila.CanvasPainter(editorCanvas, board.scene);
  palettePainter = new sidila.PalettePainter(paletteCanvas, board.scene);
  tick(); // Start animation
});
saveButton.addEventListener("click", async (event) => {
  sourceCode.value = board.save();
});

// Palette
paletteCanvas.addEventListener("mousemove", async (event) => {
  if (palettePainter != null) {
    const hover = palettePainter.mouseOver(event.offsetX, event.offsetY);
    hoverSprite.innerHTML = hover;
  }
});
paletteCanvas.addEventListener("click", async (event) => {
  if (palettePainter != null) {
    const hover = palettePainter.mouseOver(event.offsetX, event.offsetY);
    palettePainter.selectSlot(hover);
    selectedSprite.innerHTML = hover;
  }
});

// Canvas
editorCanvas.addEventListener("mousemove", async (event) => {
  if (canvasPainter != null) {
    canvasPainter.mouseOver(event.offsetX, event.offsetY);
  }
});
editorCanvas.addEventListener("click", async (event) => {
  if (canvasPainter != null) {
    const hover = canvasPainter.mouseOver(event.offsetX, event.offsetY);
    board.setSlot(hover, palettePainter.selected);
  }
});

// Paint
function tick() {
  canvasPainter.paint(board);
  palettePainter.paint();
  window.requestAnimationFrame(tick);
}

