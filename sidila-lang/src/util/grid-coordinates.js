export class GridCoordinatesTranslator {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.maxIndex = (width * height) - 1;
  }

  getSlotIndexFor(x, y) {
    if (x > this.width - 1 || y > this.height - 1) {
      throw new Error(`Coordinates out of bound: ${x},${y}`);
    }
    return x + y * this.width;
  }

  getCoordinatesFor(index) {
    if (index > this.maxIndex) {
      throw new Error(`Index out of bound: ${index}`);
    }
    return {
      x: index % this.width,
      y: Math.floor(index / this.width)
    }
  }
}