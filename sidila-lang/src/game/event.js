export class Event {
  static GameReset = new Event('game-reset');
  static GameStarted = new Event('game-started');
  static GameFinished = new Event('game-finished');
  static PlayerMoved = new Event('player-moved');
  static PlayerDied = new Event('player-died');
  static PlayerWon = new Event('player-won');

  constructor(channelName) {
    this.channelName = channelName;
  }
}