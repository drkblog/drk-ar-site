import { Publisher } from './publisher';

export class StepInterpreter {
  constructor(board) {
    this.publisher = new Publisher();
    this.board = board;
  }

  visitBody(tree, gameTicks) {
    const statement = tree.elements[gameTicks];
    this.visitStatement(statement);
  }

  visitStatement(statement) {
    const node = statement.elements[0];
    const event = this.createStepEvent(node);
    this.publisher.publish(event);
    const action = node.action;
    switch(action) {
      case 'move':
        this.board.movePlayer();
        break;
      case 'shoot':
        this.board.playerShoot();
        break;
      case 'turn':
        if (node.direction === 'derecha') {
          this.board.rotatePlayerRight();
        } else  {
          this.board.rotatePlayerLeft();
        }
        break;
    }
  }

  createStepEvent(node) {
    return {
      location: node.location
    };
  }

  subscribeToStep(subscriber) {
    this.publisher.addSubscriber(subscriber);
  }
}