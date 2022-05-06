import { LogicBlock, MoveDirection } from "./board";

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
    board.movePlayer(MoveDirection.Forth);
  }
}

export class Back extends Action {
  constructor(start, end) {
    super(start, end);
  }

  execute(board) {
    board.movePlayer(MoveDirection.Back);
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

class TurnDirection {
  static Left = new TurnDirection((board) => board.rotatePlayerLeft());
  static Right = new TurnDirection((board) => board.rotatePlayerRight());

  constructor(action) {
    this.action = action;
  }
}

export class Turn extends Action {
  constructor(start, end, direction) {
    super(start, end);
    this.direction = (direction === 'derecha') ? TurnDirection.Right : TurnDirection.Left;
  }

  execute(board) {
    this.direction.action(board);
  }
}

export class Branch extends Instruction {
  constructor(start, end, condition, body) {
    super(start, end);
    this.condition = condition;
    this.body = body;
  }

  evaluate(board) {
    return this.condition.evaluate(board);
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

export class AheadCondition extends Instruction {
  constructor(start, end, not, label) {
    super(start, end);
    this.not = not === 'no';
    if (label === 'pared') {
      this.condition = (sprite) => sprite === LogicBlock.Wall;
    } else if (label === 'zombie') {
      this.condition = (sprite) => sprite === LogicBlock.Zombie;
    } else if (label === 'espacio') {
      this.condition = (sprite) => sprite === LogicBlock.Space;
    } else {
      this.condition = (sprite) => sprite !== LogicBlock.Space;
    }
  }

  evaluate(board) {
    const evaluation = this.condition(board.getLogicInFrontOfPlayer());
    return (this.not) ? !evaluation : evaluation;
  }
}

export class InGameCondition extends Instruction {
  constructor(start, end, not) {
    super(start, end);
    this.not = not === 'no';
  }

  evaluate(board) {
    const evaluation = board.isDone();
    return (this.not) ? !evaluation : evaluation;
  }
}
