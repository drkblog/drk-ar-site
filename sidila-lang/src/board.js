// Enums
export class LogicBlock {
  static Wall = new LogicBlock("█");
  static Exit = new LogicBlock("░");
  static Space = new LogicBlock(" ");
  static Zombie = new LogicBlock("👾");
  static Sphinx = new LogicBlock("💀");

  constructor(symbol) {
    this.symbol = symbol;
  }
}

export class CardinalDirection {
  static North = new CardinalDirection("▲", position => ({x: position.x, y: position.y - 1}));
  static East = new CardinalDirection("▶", position => ({x: position.x + 1, y: position.y}));
  static South = new CardinalDirection("▼", position => ({x: position.x, y: position.y + 1}));
  static West = new CardinalDirection("◀", position => ({x: position.x - 1, y: position.y}));

  constructor(symbol, action) {
    this.symbol = symbol;
    this.action = action;
  }

  advance(position) {
    return this.action(position);
  }

  static order = [this.North, this.East, this.South, this.West];
  static toTheRight(direction) {
    const index = this.order.indexOf(direction) + 1;
    return this.order[index % 4];
  }

  static toTheLeft(direction) {
    const index = this.order.indexOf(direction) - 1;
    return this.order[((index > -1) ? index : 3)];
  }
}

export class Player {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.crashed = false;
    this.done = false;
  }

  setupSprites(theme) {
    CardinalDirection.North.sprite = theme.sprite['north'];
    CardinalDirection.East.sprite = theme.sprite['east'];
    CardinalDirection.South.sprite = theme.sprite['south'];
    CardinalDirection.West.sprite = theme.sprite['west'];
    CardinalDirection.North.arrowSprite = theme.sprite['nextNorth'];
    CardinalDirection.East.arrowSprite = theme.sprite['nextEast'];
    CardinalDirection.South.arrowSprite = theme.sprite['nextSouth'];
    CardinalDirection.West.arrowSprite = theme.sprite['nextWest'];
    this.deadSprite = theme.sprite['dead'];
  }

  getSprite() {
    if (this.crashed) {
      return this.deadSprite;
    }
    return this.direction.sprite;
  }
  
  getNextMoveSprite() {
    if (this.crashed || this.done) {
      return null;
    }
    return this.direction.arrowSprite;
  }

  move() {
    const newPosition = this.direction.advance(this);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }

  getShootTarget() {
    return this.direction.advance(this);
  }

  crash() {
    this.crashed = true;
  }
  finish() {
    this.done = true;
  }

  wouldMove() {
    return this.direction.advance(this);
  }

  wouldMoveTo(x, y) {
    const newPosition = this.wouldMove();
    return newPosition.x === x && newPosition.y === y;
  }

  isAt(x, y) {
    return this.x == x && this.y == y;
  }

  rotateLeft() {
    this.direction = CardinalDirection.toTheLeft(this.direction);
  }
  rotateRight() {
    this.direction = CardinalDirection.toTheRight(this.direction);
  }
}

export class Board {

  loadScene(scene) {
    this.scene = scene;
  }

  getSprite(x, y) {
    // Invert axis to match canvas to JSON matrix
    return this.scene.map[y][x];
  }

  getLogicLabelForSprite(sprite) {
    return this.scene.logic[sprite];
  }

  getLogic(x, y) {
    const text = this.getLogicLabelForSprite(this.getSprite(x, y));
    if (text === undefined) {
      return LogicBlock.Wall;
    }
    return LogicBlock[text];
  }

  getSlotIndexFor(x, y) {
    return x + y * this.scene.width;
  }

  getCoordinatesFor(index) {
    return {
      x: index % this.scene.width,
      y: Math.floor(index / this.scene.width)
    }
  }
}
