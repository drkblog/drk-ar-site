import { Event } from '../game/event';
import { Action, Branch, Loop } from './instruction';

export class StepInterpreter {
  constructor(board, tree, eventBus) {
    this.eventBus = eventBus;
    this.board = board;
    this.tree = tree;
    this.stack = [];
    this.stackBody(this.tree.elements);
    this.gameTicks = 0;
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
    this.gameTicks++;
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
    this.publishStep(instruction);
    if (instruction instanceof Action) {
      instruction.execute(this.board);
    } else if (instruction instanceof Branch) {
      if (instruction.evaluate(this.board)) {
        this.stackBody(instruction.body);
      } else if (instruction.elseBody !== undefined) {
        this.stackBody(instruction.elseBody);
      }
    } else if (instruction instanceof Loop) {
      if (instruction.evaluate(this.board)) {
        this.stackNode(node);
        this.stackBody(instruction.body);
      }
    }
  }

  createStepEvent(node) {
    return {
      location: node.location,
      gameTicks: this.gameTicks
    };
  }

  publishStep(instruction) {
    const event = this.createStepEvent(instruction);
    this.eventBus.publish(Event.InterpreterStep.channelName, event);
  }

  subscribeToStep(subscriber) {
    this.publisher.addSubscriber(subscriber);
  }
}