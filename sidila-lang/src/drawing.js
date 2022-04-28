// ASCII Painting
export class AsciiPainter {
  static paint(board) {
    let drawing = '';
    for(let y=0; y < board.side; y++) {
      for(let x=0; x < board.side; x++) {
        drawing += board.getPieceSymbol(x, y);
      }
      drawing += '\n';
    }
    return drawing;
  }
}

const imageBaseUrl = '/sidila/img/';
const imageMap = {
  '█': 'wall.png',
  '░': 'exit.png',
  ' ': 'space.png',
  '▲': 'player-n.png',
  '▶': 'player-e.png',
  '▼': 'player-s.png',
  '◀': 'player-w.png',
  '✟': 'skull.png'
};

export class BasicPainter {
  static paint(board) {
    let drawing = '<div class="sidila-row">';
    for(let y=0; y < board.side; y++) {
      for(let x=0; x < board.side; x++) {
        drawing += this.getImageTag(board.getPieceSymbol(x, y));
      }
      drawing += '</div><div class="sidila-row">';
    }
    drawing += '</div>';
    return drawing;
  }

  static getImageTag(symbol) {
    return this.getBaseTag(imageMap[symbol]);
  }

  static getBaseTag(image) {
    return `<img src="${imageBaseUrl}${image}">`
  }
}

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
    for(let y=0; y < board.side; y++) {
      for(let x=0; x < board.side; x++) {
        let image = this.imageMap[board.getPieceSymbol(x, y)];
        context.drawImage(image, x * this.slotSize, y * this.slotSize);
      }
    }
  }
}