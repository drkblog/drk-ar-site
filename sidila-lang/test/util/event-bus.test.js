import { EventBus } from '../../src/util/event-bus';

test('add subscriber and publish in channel', () => {
  const channel = 'an-event';
  const events = [];
  const eventBus = new EventBus();
  eventBus.subscribe(channel, (event) => events.push(event));
  const expectedEvent = 'event';
  eventBus.publish(channel, expectedEvent);
  expect(events).toEqual([expectedEvent]);
});

test('add subscriber and publish in another channel', () => {
  const channel = 'an-event';
  const events = [];
  const eventBus = new EventBus();
  eventBus.subscribe(channel, (event) => events.push(event));
  const expectedEvent = 'event';
  eventBus.publish(channel + 'another', expectedEvent);
  expect(events).toEqual([]);
});

test('add two subscribers and publish in channel', () => {
  const channel = 'an-event';
  const events = [];
  const eventBus = new EventBus();
  eventBus.subscribe(channel, (event) => events.push(event));
  eventBus.subscribe(channel, (event) => events.push(event));
  const expectedEvent = 'event';
  eventBus.publish(channel, expectedEvent);
  expect(events).toEqual([expectedEvent, expectedEvent]);
});
