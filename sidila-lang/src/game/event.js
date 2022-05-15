export class Event {
  static PlayerMoved = new Event('player-moved');
  static PlayerDied = new Event('player-died');
  static PlayerWon = new Event('player-won');

  constructor(channelName) {
    this.channelName = channelName;
  }
}