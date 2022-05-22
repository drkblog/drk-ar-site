import { Event } from './event';
import { GameBoard } from './game-board';
import { Score } from './score';
import { StepInterpreter } from '../instructions/interpreter';
import { EventBus } from '../util/event-bus';

export class Control {
  constructor(codeMirror) {
    this.codeMirror = codeMirror;
    this.eventBus = new EventBus();
    this.board = new GameBoard(this.eventBus);
    this.score = new Score();
    this.running = false;
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.eventBus.subscribe(Event.GameFinished.channelName, () => this.running = false);
    this.eventBus.subscribe(Event.InterpreterStep.channelName, () => {
      if (this.interpreter.isFinished()) {
        this.running = false;
      }
    });
    this.codeMirror.on('changes', () => this.publishScore());
  }

  run(tree) {
    this.interpreter = new StepInterpreter(this.board, tree, this.eventBus);
    this.board.start();
    this.running = true;
  }

  isRunning() {
    return this.running;
  }

  tick() {
    this.interpreter.tick();
    this.publishScore();
  }

  publishScore() {
    const lines = this.codeMirror.lineCount();
    const score = this.score.getScore(lines, this.board);
    this.eventBus.publish(Event.Score.channelName, score);
  }

  reset(sceneIndex) {
    this.board.reset(sceneIndex);
    this.running = false;
  }

  subscribeToStep(subscriber) {
    this.eventBus.subscribe(Event.InterpreterStep.channelName, subscriber);
  }
  subscribeToScore(subscriber) {
    this.eventBus.subscribe(Event.Score.channelName, subscriber);
  }
  subscribeToGameFinished(subscriber) {
    this.eventBus.subscribe(Event.GameFinished.channelName, subscriber);
  }

  setSound(on) {
    this.board.setSound(on);
  }
}