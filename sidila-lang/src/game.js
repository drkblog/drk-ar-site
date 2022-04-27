export class Game {
  static processStatement(tree, gameTicks, board) {
    const statement = tree.elements[gameTicks];
    this.tryExecuting(statement, board);
  }

  static tryExecuting(statement, board) {
    console.log(statement.text);
    if (statement.text == 'avanzar') {
      board.movePlayer();
    } else if (statement.elements.length == 2) {
      if (statement.elements[0].text == 'girar') {
        if (statement.elements[1].text == 'derecha') {
          board.rotatePlayerRight();
        } else if (statement.elements[1].text == 'izquierda') {
          board.rotatePlayerLeft();
        }
      }
    } else {
      statement.elements.forEach(element => {
        this.tryExecuting(element, board);
      });
    }
  }
}