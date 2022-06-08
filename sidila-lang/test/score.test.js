import { Score } from '../src/game/score';

test('score', () => {
  const score = new Score();
  const lines = 10;
  const board = {
    moves: 15,
    shots: 2,
    zombie: { crashed: true },
    isCrashed() {
      return false;
    }
  }
  expect(score.getScore(lines, board)).toBe(156706);
});