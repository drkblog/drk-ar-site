import { GridCoordinatesTranslator } from '../../src/util/grid-coordinates';

test('coordinates to index', () => {
  const translator = new GridCoordinatesTranslator(5, 5);
  expect(translator.getCoordinatesFor(4)).toEqual({ x: 4, y: 0 });
  expect(translator.getCoordinatesFor(7)).toEqual({ x: 2, y: 1 });
  expect(translator.getCoordinatesFor(24)).toEqual({ x: 4, y: 4 });
});

test('index to coordinates', () => {
  const translator = new GridCoordinatesTranslator(5, 5);
  expect(translator.getSlotIndexFor(4, 0)).toEqual(4);
  expect(translator.getSlotIndexFor(2, 1)).toEqual(7);
  expect(translator.getSlotIndexFor(4, 4)).toEqual(24);
});

test('index out of bound', () => {
  const translator = new GridCoordinatesTranslator(5, 5);
  expect(() => {
    translator.getCoordinatesFor(66);
  }).toThrow('Index out of bound:');
});

test('Coordinates out of bound', () => {
  const translator = new GridCoordinatesTranslator(5, 5);
  expect(() => {
    translator.getSlotIndexFor(21, 21);
  }).toThrow('Coordinates out of bound:');
});
