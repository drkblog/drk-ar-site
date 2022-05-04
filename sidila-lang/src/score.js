export class Score {
  constructor() {
    this.base = 100000; // 100k
  }

  getScore(lines, moves, zombieKilled) {
    const movesFactor = (zombieKilled) ? 0.91 : 1;
    const linesFactor = (zombieKilled) ? 0.95 : 1;
    return Math.ceil(this.base - (lines * 3002 * linesFactor) - (moves * 951 * movesFactor));
  }
}