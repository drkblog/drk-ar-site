export class AnimationService {
  constructor(animations) {
    this.animations = {};
    for (const location in animations) {
      if (Object.hasOwnProperty.call(animations, location)) {
        this.animations[location] = new Animation(animations[location]);
      }
    }
  }

  getSprite(x, y, timestamp) {
    const location = `${x},${y}`;
    if (Object.hasOwnProperty.call(this.animations, location)) {
      return this.animations[location].getSprite(timestamp);
    }
    return undefined;
  }
}

export class Animation {
  constructor(settings) {
    this.settings = settings;
    this.loopLimit = settings.sprites.length * settings.period;
    this.currentTimestamp = performance.now();
  }

  getSprite(timestamp) {
    this.advanceTime(timestamp);
    return this.settings.sprites[this.getIndexForCurrentTimestamp()];
  }

  advanceTime(timestamp) {
    this.currentTimestamp = timestamp;
  }

  getIndexForCurrentTimestamp() {
    return Math.floor(this.currentTimestamp / this.settings.period) % this.settings.sprites.length;
  }
}