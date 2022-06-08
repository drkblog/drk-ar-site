import { StepInterpreter } from '../../src/instructions/interpreter';
import { GameBoard } from '../../src/game/game-board';
import { EventBus } from '../../src/util/event-bus';
jest.mock('../../src/sound');

test('empty program consumes on tick to finish', () => {
  const eventBus = new EventBus();
  const board = new GameBoard(eventBus);
  const tree = { elements: [] };
  const interpreter = new StepInterpreter(board, tree, eventBus);
  expect(interpreter.isFinished()).toStrictEqual(false);
  interpreter.tick();
  expect(interpreter.isFinished()).toStrictEqual(true);
});