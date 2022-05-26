export class Score {
  constructor() {
    this.base = 200000; // 200k
  }

  getScore(lines, board) {
    if (board.isCrashed()) {
      return 0;
    }
    const zombieKilled = board.zombie.crashed;
    const linesFactor = (zombieKilled) ? 0.96 : 1;
    const moves = board.moves;
    const movesFactor = (zombieKilled) ? 0.91 : 1;
    const shots = board.shots;
    const shotsFactor = (zombieKilled) ? 0.73 : 1;
    return Math.ceil(
      this.base 
      - (lines * 3002 * linesFactor) 
      - (moves * 996 * movesFactor)
      - (shots * 603 * shotsFactor)
    );
  }
}