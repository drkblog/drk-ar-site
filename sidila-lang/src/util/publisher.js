export class Publisher {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers.push(subscriber);
    } 
  }

  publish(event) {
    this.subscribers.forEach(subscriber => {
      subscriber(event);
    });
  }
}