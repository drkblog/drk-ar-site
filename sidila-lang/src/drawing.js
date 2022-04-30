const imageBaseUrl = '/sidila/img/';

export class CanvasPainter {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.theme = theme;
    this.sprites = new Image();
    this.sprites.src = `${imageBaseUrl}${this.theme.image}`;
  }

  paint(board) {
    const context = this.canvas.getContext('2d');
    context.fillStyle = this.theme.background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let y=0; y < board.scene.height; y++) {
      for(let x=0; x < board.scene.width; x++) {
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

export class PalettePainter {
  constructor(canvas, scene) {
    this.canvas = canvas;
    this.scene = scene;
    this.sprites = new Image();
    this.sprites.src = `${imageBaseUrl}${scene.theme.image}`;
    this.slotsInX = Math.floor(this.scene.theme.imageWidth / this.scene.theme.spriteWidth);
    this.slotsInY = Math.floor(this.scene.theme.imageHeight / this.scene.theme.spriteHeight);
    this.selected = 0;
  }

  paint() {
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.drawImage(this.sprites, 0, 0);
    if (this.selected !== undefined) {
      const origin = this.getCanvasCoordinatesForSlot(this.selected);
      this.drawSlot(context, origin, 'white');
    }
    if (this.hover !== undefined) {
      const origin = this.getCanvasCoordinatesForSlot(this.hover);
      this.drawSlot(context, origin, 'red');
    }
  }

  drawSlot(context, origin, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.rect(origin.x, origin.y, this.scene.theme.spriteWidth, this.scene.theme.spriteHeight);
    context.stroke();
    context.closePath();
  }

  getCanvasCoordinatesForSlot(index) {
    return {
      x: (index % this.slotsInX) * this.scene.theme.spriteWidth,
      y: Math.floor(index / this.slotsInX) * this.scene.theme.spriteHeight
    };
  }

  mouseOver(x, y) {
    this.hover = this.getSlotIndexForDiscrete(
      Math.floor(x / this.scene.theme.spriteWidth),
      Math.floor(y / this.scene.theme.spriteHeight)
    );
    return this.hover;
  }

  getSlotIndexForDiscrete(x, y) {
    return x + y * this.slotsInX;
  }

  selectSlot(index) {
    this.selected = index;
  }
}