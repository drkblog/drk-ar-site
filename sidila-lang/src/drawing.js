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
