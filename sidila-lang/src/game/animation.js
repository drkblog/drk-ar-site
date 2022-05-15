export class AnimationService {
  constructor(animations, eventBus) {
    this.animations = {};
    for (const location in animations) {
      if (Object.hasOwnProperty.call(animations, location)) {
        this.animations[location] = AnimationService.createAnimationFromSettings(animations[location], eventBus);
      }
    }
  }

  getSprite(x, y, timestamp) {
    return this.getAnimationAt(x, y)?.getSprite(timestamp);
  }

  getAnimationAt(x, y) {
    const location = `${x},${y}`;
    if (Object.hasOwnProperty.call(this.animations, location)) {
      return this.animations[location];
    }
    return undefined;
  }

  trigger(x, y) {
    const animation = this.getAnimationAt(x, y);
    if ((animation !== undefined) && (animation instanceof TwoWaysAnimation)) {
      animation.launch();
    }
  }

  static createAnimationFromSettings(animation, eventBus) {
    switch(animation.type) {
      case 'loop': return new LoopAnimation(animation.settings, eventBus);
      case 'two-ways': return new TwoWaysAnimation(animation.settings, eventBus);
    }
  }
}

export class LoopAnimation {
  constructor(settings, eventBus) {
    this.settings = settings;
    this.loopLimit = settings.sprites.length * settings.period;
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

export class TwoWaysAnimation {
  constructor(settings, eventBus) {
    this.baseAnimation = new LoopAnimation(settings);
    this.alternateTimestamp = 0;
    this.animationRunning = false;
    this.animationForward = true;
    if (settings.subscribe !== undefined) {
      eventBus.subscribe(settings.subscribe, () => this.launch());
    }
  }

  launch() {
    this.animationRunning = true;
  }

  getSprite(timestamp) {
    this.advanceTime(timestamp);
    return this.baseAnimation.getSprite(this.alternateTimestamp);
  }

  getDelta(timestamp) {
    if (this.previousTimestamp === undefined) {
      this.previousTimestamp = timestamp;
      return 0;
    }
    const delta = timestamp - this.previousTimestamp;
    this.previousTimestamp = timestamp;
    return delta;
  }

  advanceTime(timestamp) {
    if (this.animationRunning) {
      if (this.animationForward) {
        this.alternateTimestamp += this.getDelta(timestamp);
      } else {
        this.alternateTimestamp -= this.getDelta(timestamp);
      }
      if (this.alternateTimestamp < 0) {
        this.alternateTimestamp = 0;
        this.animationRunning = false;
        this.animationForward = true;
        this.previousTimestamp = undefined;
      } else if (this.alternateTimestamp >= this.baseAnimation.loopLimit) {
        this.alternateTimestamp = this.baseAnimation.loopLimit -1;
        this.animationRunning = false;
        this.animationForward = false;
        this.previousTimestamp = undefined;
      }
    }
  }
}