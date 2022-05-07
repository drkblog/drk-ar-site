import { Publisher } from './publisher';
import { Action, Branch, Loop } from './instruction';

export class StepInterpreter {
  constructor(board, tree) {
    this.publisher = new Publisher();
    this.board = board;
    this.tree = tree;
    this.stack = [];
    this.stackBody(this.tree.elements);
  }

  stackBody(nodes) {
    for(let i=nodes.length - 1; i >= 0; i--) {
      this.stackNode(nodes[i]);
    }
  }
  stackNode(node) {
    this.stack.push(node);
  }

  tick() {
    const node = this.stack.pop();
    if (node !== undefined) {
      this.visitNode(node);
    }
  }

  isFinished() {
    return this.stack.length === 0;
  }

  visitNode(node) {
    const instruction = node.elements[0];
    const event = this.createStepEvent(instruction);
    this.publisher.publish(event);
    if (instruction instanceof Action) {
      instruction.execute(board);
    } else if (instruction instanceof Branch) {
      if (instruction.evaluate(board)) {
        this.stackBody(instruction.body);
      } else if (instruction.elseBody !== undefined) {
        this.stackBody(instruction.elseBody);
      }
    } else if (instruction instanceof Loop) {
      if (instruction.evaluate(board)) {
        this.stackNode(node);
        this.stackBody(instruction.body);
      }
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