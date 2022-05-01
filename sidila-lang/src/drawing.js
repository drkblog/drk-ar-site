const imageBaseUrl = '/sidila/img/';

class GridPainter {
  constructor(canvas, width, height, slotWidth, slotHeight) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.slotWidth = slotWidth;
    this.slotHeight = slotHeight;
    this.slotsInX = Math.floor(this.width / this.slotWidth);
    this.slotsInY = Math.floor(this.height / this.slotHeight);
  }

  mouseOver(x, y) {
    this.hover = this.getSlotIndexForDiscrete(
      Math.floor(x / this.slotWidth),
      Math.floor(y / this.slotHeight)
    );
    return this.hover;
  }

  getSlotIndexForDiscrete(x, y) {
    return x + y * this.slotsInX;
  }

  getCanvasCoordinatesForSlot(index) {
    return {
      x: (index % this.slotsInX) * this.slotWidth,
      y: Math.floor(index / this.slotsInX) * this.slotHeight
    };
  }
}

export class CanvasPainter extends GridPainter {
  constructor(canvas, scene) {
    super(
      canvas, 
      scene.width * scene.theme.spriteWidth,
      scene.height * scene.theme.spriteHeight,
      scene.theme.spriteWidth, 
      scene.theme.spriteHeight
    );
    this.scene = scene;
    this.sprites = new Image();
    this.sprites.src = `${imageBaseUrl}${this.scene.theme.image}`;
  }

  paint(board) {
    const context = this.canvas.getContext('2d');
    context.fillStyle = this.scene.theme.background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let y=0; y < this.slotsInY; y++) {
      for(let x=0; x < this.slotsInX; x++) {
        const spriteNumber = board.getSprite(x, y);
        const sourceX = this.getSourceX(spriteNumber);
        const sourceY = this.getSourceY(spriteNumber);
        context.drawImage(
          this.sprites, 
          sourceX, 
          sourceY,
          this.slotWidth,
          this.slotHeight,
          x * this.slotWidth,
          y * this.slotHeight,
          this.slotWidth,
          this.slotHeight
        );
      }
    }
  }

  getSourceX(spriteNumber) {
    return this.slotWidth * (spriteNumber % (this.sprites.width/this.slotWidth));
  }

  getSourceY(spriteNumber) {
    return this.slotHeight * Math.floor(spriteNumber / (this.sprites.width/this.slotWidth));
  }
}

export class PalettePainter extends GridPainter {
  constructor(canvas, scene) {
    super(
      canvas, 
      scene.theme.imageWidth,
      scene.theme.imageHeight,
      scene.theme.spriteWidth, 
      scene.theme.spriteHeight
    );
    this.scene = scene;
    this.sprites = new Image();
    this.sprites.src = `${imageBaseUrl}${scene.theme.image}`;
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

  selectSlot(index) {
    this.selected = index;
  }
}