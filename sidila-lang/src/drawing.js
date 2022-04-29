const imageBaseUrl = '/sidila/img/';

export class CanvasPainter {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.theme = theme;
    this.imageMap = {};
    this.sprites = new Image();
    this.sprites.src = `${imageBaseUrl}${this.theme.image}`;
  }

  paint(board) {
    const context = this.canvas.getContext('2d');
    context.fillStyle = this.theme.background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let y=0; y < board.height; y++) {
      for(let x=0; x < board.width; x++) {
        const spriteNumber = board.getSprite(x, y);
        const sourceX = this.getSourceX(spriteNumber);
        const sourceY = this.getSourceY(spriteNumber);
        context.drawImage(
          this.sprites, 
          sourceX, 
          sourceY,
          this.theme.spriteWidth,
          this.theme.spriteHeight,
          x * this.theme.spriteWidth,
          y * this.theme.spriteHeight,
          this.theme.spriteWidth,
          this.theme.spriteHeight
        );
      }
    }
  }

  getSourceX(spriteNumber) {
    return this.theme.spriteWidth * (spriteNumber % (this.sprites.width/this.theme.spriteWidth));
  }

  getSourceY(spriteNumber) {
    return this.theme.spriteHeight * Math.floor(spriteNumber / (this.sprites.width/this.theme.spriteWidth));
  }
}
