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
    switch(symbol) {
      case '█': return this.getBaseTag('wall.png');
      case '░': return this.getBaseTag('exit.png');
      case ' ': return this.getBaseTag('space.png');
      case '▲': return this.getBaseTag('player-n.png');
      case '▶': return this.getBaseTag('player-e.png');
      case '▼': return this.getBaseTag('player-s.png');
      case '◀': return this.getBaseTag('player-w.png');
    }
  }

  static getBaseTag(image) {
    return `<img src="/sidila/img/${image}">`
  }
}
