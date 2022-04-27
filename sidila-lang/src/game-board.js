// Enums
class Block {
  static Wall = new Block("█");
  static Exit = new Block("░");
  static Space = new Block(" ");

  constructor(symbol) {
    this.symbol = symbol;
  }
}

export class CardinalDirection {
  static North = new CardinalDirection("▲", position => ({x: position.x, y: position.y-1}));
  static East = new CardinalDirection("▶", position => ({x: position.x+1, y: position.y}));
  static South = new CardinalDirection("▼", position => ({x: position.x, y: position.y+1}));
  static West = new CardinalDirection("◀", position => ({x: position.x-1, y: position.y}));

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

  getSymbol() {
    if (this.crashed) {
      return '✟';
    }
    return this.direction.symbol;
  }

  move() {
    const newPosition = this.direction.advance(this);
    this.x = newPosition.x;
    this.y = newPosition.y;
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

export class Board {
  constructor(side, player) {
    this.player = player;
    this.side = side;
    this.board = [];
    for(let i=0; i < side; i++) {
      this.board[i] = [];
      for(let j=0; j < side; j++) {
        this.board[i][j] = Block.Space;
      }
    }
    this.boardLoadHardcoded();
  }

  // TODO: Write code to load different boards
  boardLoadHardcoded() {
    for(let i=0; i < this.side; i++) {
      this.board[i][0] = Block.Wall;
      this.board[i][this.side - 1] = Block.Wall;
      this.board[0][i] = Block.Wall;
      this.board[this.side - 1][i] = Block.Wall;
    }
    this.board[side-1][sid-2] = Block.Exit;
  }

  canMoveInto(x, y) {
    return this.board[x][y] === Block.Space;
  }

  isCrashed() {
    return this.player.crashed;
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

  getPieceSymbol(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSymbol();
    } else {
      return this.board[x][y].symbol;
    }
  }
}
