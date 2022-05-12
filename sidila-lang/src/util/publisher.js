export class Publisher {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers.push(subscriber);
    }
    return subscriber;
  }

  removeSubscriber(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index != -1) {
      this.subscribers.splice(index, 1);
    } 
  }

  publish(event) {
    this.subscribers.forEach(subscriber => {
      subscriber(event);
    });
  }
}