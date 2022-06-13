import { LogicBlock, MoveDirection } from "../game/board";

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
  static Back = new TurnDirection((board) => board.rotatePlayerBack());

  constructor(action) {
    this.action = action;
  }
}

export class Turn extends Action {
  constructor(start, end, direction) {
    super(start, end);
    switch (direction) {
      case 'la derecha': 
        this.direction = TurnDirection.Right;
        break;
      case 'la izquierda':
        this.direction = TurnDirection.Left;
        break;
      case 'atras':
        this.direction = TurnDirection.Back;
        break;
      default:
        throw new Error(`Invalid direction: '${direction}'`);
    }
  }

  execute(board) {
    this.direction.action(board);
  }
}

export class Branch extends Instruction {
  constructor(start, end, condition, body, elseBody) {
    super(start, end);
    this.condition = condition;
    this.body = body;
    this.elseBody = elseBody;
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

export class LookAheadCondition extends Instruction {
  constructor(start, end, not, spriteLabel, lookUpDirection) {
    super(start, end);
    this.not = not === 'no';
    if (spriteLabel === 'pared') {
      this.condition = (sprite) => sprite === LogicBlock.Wall;
    } else if (spriteLabel === 'zombie') {
      this.condition = (sprite) => sprite === LogicBlock.Zombie;
    } else if (spriteLabel === 'espacio') {
      this.condition = (sprite) => sprite === LogicBlock.Space;
    } else if (spriteLabel === 'salida') {
      this.condition = (sprite) => sprite === LogicBlock.Exit;
    } else {
      this.condition = (sprite) => sprite !== LogicBlock.Space;
    }
    if (lookUpDirection == 'adelante') {
      this.lookUpDirection = (board) => board.getLogicInFrontOfPlayer();
    } else if (lookUpDirection == 'a la izquierda') {
      this.lookUpDirection = (board) => board.getLogicToTheLeftOfPlayer();
    } else {
      this.lookUpDirection = (board) => board.getLogicToTheRightOfPlayer();
    }
  }

  evaluate(board) {
    const evaluation = this.condition(this.lookUpDirection(board));
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
