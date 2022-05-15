import { Publisher } from '../../src/util/publisher';

test('add subscriber and publish', () => {
  const publisher = new Publisher();
  const events = [];
  const expectedEvent = { a: 1 };
  publisher.addSubscriber((event) => events.push(event));
  publisher.publish(expectedEvent);
  expect(events).toEqual([expectedEvent]);
});

test('remove subscriber and publish', () => {
  const publisher = new Publisher();
  const events = [];
  const expectedEvent = { a: 1 };
  const subscriber = publisher.addSubscriber((event) => events.push(event));
  publisher.removeSubscriber(subscriber);
  publisher.publish(expectedEvent);
  expect(events).toEqual([]);
});

test('add subscriber twice and publish', () => {
  const publisher = new Publisher();
  const events = [];
  const expectedEvent = { a: 1 };
  const subscriber = publisher.addSubscriber((event) => events.push(event));
  publisher.addSubscriber(subscriber);
  publisher.publish(expectedEvent);
  expect(events).toEqual([expectedEvent]);
});