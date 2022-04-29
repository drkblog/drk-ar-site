// Enums
class LogicBlock {
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
  }

  setupSprites(theme) {
    CardinalDirection.North.sprite = theme.sprite['north'];
    CardinalDirection.East.sprite = theme.sprite['east'];
    CardinalDirection.South.sprite = theme.sprite['south'];
    CardinalDirection.West.sprite = theme.sprite['west'];
    this.deadSprite = theme.sprite['dead'];
  }

  getSprite() {
    if (this.crashed) {
      return this.deadSprite;
    }
    return this.direction.sprite;
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

  wouldMove() {
    return this.direction.advance(this);
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

class Slot {
  constructor(sprite, logic) {
    this.sprite = sprite;
    this.logic = logic;
  }
}

export class Board {
  constructor() {
    this.reset();
  }

  reset() {
    const scene = require('./scene/dungeon');
    this.width = scene.width;
    this.height = scene.height;
    this.theme = scene.theme;
    this.board = this.createBoardFromScene(scene);
    this.player = new sidila.Player(2, 2, sidila.CardinalDirection.East);
    this.player.setupSprites(this.theme);
  }

  createBoardFromScene(scene) {
    const board = [];
    for(let x=0; x < scene.width; x++) {
      board[x] = [];
      for(let y=0; y < scene.height; y++) {
        const sprite = scene.map[y][x];
        board[x][y] = new Slot(sprite, Board.getLogicFor(scene.logic[sprite]));
      }
    }
    return board;
  }

  static getLogicFor(text) {
    return LogicBlock[text];
  }

  canMoveInto(x, y) {
    return this.board[x][y].logic === LogicBlock.Space || this.board[x][y].logic === LogicBlock.Exit;
  }

  isCrashed() {
    return this.player.crashed;
  }

  isDone() {
    return this.board[this.player.x][this.player.y].logic === LogicBlock.Exit;
  }

  movePlayer() {
    const newPosition = this.player.wouldMove();
    if (this.canMoveInto(newPosition.x, newPosition.y)) {
      this.player.move();
    } else {
      this.player.crash();
    }
  }
  rotatePlayerLeft() {
    this.player.rotateLeft();
  }
  rotatePlayerRight() {
    this.player.rotateRight();
  }
  playerShoot() {
    const shootAt = this.player.getShootTarget();
    if (this.board[shootAt.x][shootAt.y].logic === LogicBlock.Zombie) {
      this.board[shootAt.x][shootAt.y].logic = LogicBlock.Space;
    }
  }

  getSprite(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSprite();
    } else {
      return this.board[x][y].sprite;
    }
  }
}
