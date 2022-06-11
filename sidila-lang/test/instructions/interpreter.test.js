import { StepInterpreter } from '../../src/instructions/interpreter';
import { GameBoard } from '../../src/game/game-board';
import { Event } from '../../src/game/event';
import { EventBus } from '../../src/util/event-bus';
import { Move } from '../../src/instructions/instruction';
jest.mock('../../src/sound');

test('empty program consumes on tick', () => {
  const eventBus = new EventBus();
  const board = new GameBoard(eventBus);
  const tree = { elements: [] };
  const interpreter = new StepInterpreter(board, tree, eventBus);
  expect(interpreter.isFinished()).toStrictEqual(false);
  interpreter.tick();
  expect(interpreter.isFinished()).toStrictEqual(true);
});

test('three advance consume three ticks', () => {
  const eventBus = new EventBus();
  const board = new GameBoard(eventBus);
  const tree = { elements: [ 
    { elements: [new Move()] },
    { elements: [new Move()] },
    { elements: [new Move()] }
  ] };
  const interpreter = new StepInterpreter(board, tree, eventBus);
  expect(interpreter.isFinished()).toStrictEqual(false);
  interpreter.tick();
  interpreter.tick();
  interpreter.tick();
  expect(interpreter.isFinished()).toStrictEqual(true);
});

test('publishes step event', () => {
  const eventBus = new EventBus();
  const board = new GameBoard(eventBus);
  const instruction = new Move(
    getRandomSourceCodePosition(), 
    getRandomSourceCodePosition()
  );
  const tree = { elements: [ 
    { elements: [ instruction ] }
  ] };
  const interpreter = new StepInterpreter(board, tree, eventBus);
  let event = undefined;
  interpreter.subscribeToStep((ev) => event = ev);
  interpreter.tick();
  expect(event).toStrictEqual({
    "gameTicks": 1,
    "location": {
       "end": instruction.location.end,
       "start": instruction.location.start,
     },
  });
});

function getRandomSourceCodePosition() {
  return Math.floor(Math.random() * 7500);
}