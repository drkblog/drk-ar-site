export class StepInterpreter {
  static processStatement(tree, gameTicks, board) {
    const statement = tree.elements[gameTicks];
    this.tryExecuting(statement, board);
  }

  static tryExecuting(statement, board) {
    console.log(statement.text);
    const node = statement.elements[0];
    const action = node.action;
    switch(action) {
      case 'move':
        board.movePlayer();
        break;
      case 'turn':
        if (node.direction === 'derecha') {
          board.rotatePlayerRight();
        } else  {
          board.rotatePlayerLeft();
        }
        break;
    }
  }
}