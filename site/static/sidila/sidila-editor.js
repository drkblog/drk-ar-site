// UI Setup
const sourceCode = document.querySelector("#code");
const editorCanvas = document.querySelector("#editorCanvas");
const paletteCanvas = document.querySelector("#paletteCanvas");
const message = document.querySelector("#message");
const hoverSprite = document.querySelector("#hoverSprite");
const selectedSprite = document.querySelector("#selectedSprite");
const editorCoordinates = document.querySelector("#editorCoordinates");
const hoverEditorSprite = document.querySelector("#hoverEditorSprite");
const loadButton = document.querySelector("#load");
const saveButton = document.querySelector("#save");
const undoButton = document.querySelector("#undo");

// Editor setup
const board = new sidila.EditorBoard();
let canvasPainter;
let palettePainter;


// UI Actions
loadButton.addEventListener("click", async (event) => {
  board.load(sourceCode.value.toString());
  paletteCanvas.width = board.scene.theme.imageWidth;
  paletteCanvas.height = board.scene.theme.imageHeight;
  canvasPainter = new sidila.CanvasPainter(editorCanvas, board);
  palettePainter = new sidila.PalettePainter(paletteCanvas, board.scene);
  paint(); // Start animation
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
function setSlot(event) {
  const hover = canvasPainter.mouseOver(event.offsetX, event.offsetY);
  board.setSlot(hover, palettePainter.selected);
}
editorCanvas.addEventListener("mousemove", async (event) => {
  if (canvasPainter != null) {
    const hover = canvasPainter.mouseOver(event.offsetX, event.offsetY);
    const discrete = canvasPainter.getCoordinatesForSlot(hover);
    editorCoordinates.innerHTML = `${discrete.x}, ${discrete.y}`;
    const sprite = board.getSprite(discrete.x, discrete.y);
    hoverEditorSprite.innerHTML = `${sprite}`;
    if (event.buttons === 1) {
      setSlot(event);
    }
  }
});
editorCanvas.addEventListener("click", async (event) => {
  if (canvasPainter != null) {
    setSlot(event);
  }
});
undoButton.addEventListener("click", async (event) => {
  board.undoLastAction();
});

// Paint
function paint() {
  canvasPainter.paint(board);
  palettePainter.paint();
  window.requestAnimationFrame(paint);
}

