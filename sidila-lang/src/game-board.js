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

export class Board {
  constructor(side) {
    this.width = side;
    this.height = side;
    this.reset();
  }

  reset() {
    this.player = new sidila.Player(1, 1, sidila.CardinalDirection.East);
    this.boardLoadHardcoded();
  }

  // TODO: Write code to load different boards
  boardLoadHardcoded() {
    this.board = [];
    for(let x=0; x < this.width; x++) {
      this.board[x] = [];
      for(let y=0; y < this.height; y++) {
        let piece;
        if (x == 0 || y == 0 || x == this.width - 1 || y == this.height - 1) {
          piece = LogicBlock.Wall;
        } else {
          piece = LogicBlock.Space;
        }
        this.board[x][y] = piece;
      }
    }
    for(let i=0; i < this.width; i++) {
      this.board[i][0] = LogicBlock.Wall;
      this.board[i][this.height - 1] = LogicBlock.Wall;
    }
    for(let i=0; i < this.height; i++) {
      this.board[0][i] = LogicBlock.Wall;
      this.board[this.width - 1][i] = LogicBlock.Wall;
    }
    this.board[this.width - 1][this.height - 2] = LogicBlock.Exit;
    this.board[4][7] = LogicBlock.Zombie;
    this.board[6][6] = LogicBlock.Sphinx;
    this.target = (player) => (player.x == this.width - 1) && (player.y == this.height - 2);
  }

  canMoveInto(x, y) {
    return this.board[x][y] === LogicBlock.Space || this.board[x][y] === LogicBlock.Exit;
  }

  isCrashed() {
    return this.player.crashed;
  }

  isDone() {
    return this.target(this.player);
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
    if (this.board[shootAt.x][shootAt.y] === LogicBlock.Zombie) {
      this.board[shootAt.x][shootAt.y] = LogicBlock.Space;
    }
  }

  getPieceSymbol(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSymbol();
    } else {
      return this.board[x][y].symbol;
    }
  }
}
