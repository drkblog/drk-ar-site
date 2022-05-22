export class Score {
  constructor() {
    this.base = 100000; // 100k
  }

  getScore(lines, board) {
    if (board.isCrashed()) {
      return 0;
    }
    const zombieKilled = board.zombie.crashed;
    const linesFactor = (zombieKilled) ? 0.95 : 1;
    const moves = board.moves;
    const movesFactor = (zombieKilled) ? 0.91 : 1;
    const shots = board.shots;
    const shotsFactor = (zombieKilled) ? 0.87 : 1;
    return Math.ceil(
      this.base 
      - (lines * 3002 * linesFactor) 
      - (moves * 951 * movesFactor)
      - (shots * 574 * shotsFactor)
    );
  }
}