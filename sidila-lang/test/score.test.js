import { Score } from '../src/score';

test('score', () => {
  const score = new Score();
  const lines = 10;
  const board = {
    moves: 15,
    shots: 2,
    zombie: { crashed: true }
  }
  expect(score.getScore(lines, board)).toBe(57502);
});