import { LogicBlock } from "./board";

export class Instruction {
  constructor(start, end) {
    this.location = { start, end };
  }
}

export class Action extends Instruction {
  constructor(start, end) {
    super(start, end);
  }
}

export class Move extends Action {
  constructor(start, end) {
    super(start, end);
  }

  execute(board) {
    board.movePlayer();
  }
}

export class Shoot extends Action {
  constructor(start, end) {
    super(start, end);
  }

  execute(board) {
    board.playerShoot();
  }
}

class Direction {
  static Left = new Direction((board) => board.rotatePlayerLeft());
  static Right = new Direction((board) => board.rotatePlayerRight());

  constructor(action) {
    this.action = action;
  }
}

export class Turn extends Action {
  constructor(start, end, direction) {
    super(start, end);
    this.direction = (direction === 'derecha') ? Direction.Right : Direction.Left;
  }

  execute(board) {
    this.direction.action(board);
  }
}

export class Loop extends Instruction {
  constructor(start, end, condition, body) {
    super(start, end);
    this.condition = condition;
    this.body = body;
  }

  evaluate(board) {
    return this.condition.evaluate(board);
  }
}

export class Condition extends Instruction {
  constructor(start, end, label) {
    super(start, end);
    if (label === 'pared') {
      this.condition = (sprite) => sprite !== LogicBlock.Wall;
    } else {
      this.condition = (sprite) => sprite === LogicBlock.Space;
    }
  }

  evaluate(board) {
    return this.condition(board.getLogicInFrontOfPlayer());
  }
}