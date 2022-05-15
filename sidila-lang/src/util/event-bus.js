export class EventBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe(channel, subscriber) {
    if (!Object.hasOwnProperty.call(this.subscribers, channel)) {
      this.subscribers[channel] = [];
    }
    this.subscribers[channel].push(subscriber);
  }

  unsubscribe(channel, subscriber) {
    if (Object.hasOwnProperty.call(this.subscribers, channel)) {
      this.subscribers[channel].splice(this.subscribers[channel].indexOf(subscriber), 1);
    }
  }

  publish(channel, event) {
    if (Object.hasOwnProperty.call(this.subscribers, channel)) {
      this.subscribers[channel].forEach(subscriber => {
        subscriber(event);
      });
    }
  }
}