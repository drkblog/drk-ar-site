const imageBaseUrl = '/sidila/img/';
const imageMap = {
  '█': 'wall.png',
  '░': 'exit.png',
  ' ': 'space.png',
  '▲': 'player-n.png',
  '▶': 'player-e.png',
  '▼': 'player-s.png',
  '◀': 'player-w.png',
  '✟': 'skull.png',
  '👾': 'zombie.png',
  '💀': 'greek-sphinx.png'
};

export class CanvasPainter {
  constructor(canvas, slotSize) {
    this.canvas = canvas;
    this.slotSize = slotSize;
    this.imageMap = {};
    for (const entry in imageMap) {
      this.imageMap[entry] = new Image();
      this.imageMap[entry].src = `${imageBaseUrl}${imageMap[entry]}`;
    }
  }

  paint(board) {
    const context = this.canvas.getContext('2d');
    for(let y=0; y < board.height; y++) {
      for(let x=0; x < board.width; x++) {
        let image = this.imageMap[board.getPieceSymbol(x, y)];
        context.drawImage(image, x * this.slotSize, y * this.slotSize);
      }
    }
  }
}
