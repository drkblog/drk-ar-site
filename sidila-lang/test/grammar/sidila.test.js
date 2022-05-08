import { parse } from '../../src/grammar/sidila'
import { Move, Back, Shoot, Turn, Branch, Loop, LookAheadCondition, InGameCondition  } from '../../src/instruction.js';

// Actions
test('avanzar', () => {
  const tree = parse('avanzar');
  const expected = new Move(0, 7);
  expect(tree.elements[0].elements[0]).toStrictEqual(expected);
});
test('retroceder', () => {
  const tree = parse('retroceder');
  const expected = new Back(0, 10);
  expect(tree.elements[0].elements[0]).toStrictEqual(expected);
});
test('disparar', () => {
  const tree = parse('disparar');
  const expected = new Shoot(0, 8);
  expect(tree.elements[0].elements[0]).toStrictEqual(expected);
});
test('girar hacia la derecha', () => {
  const tree = parse('girar hacia la derecha');
  const expected = new Turn(0, 22, 'derecha');
  expect(tree.elements[0].elements[0]).toStrictEqual(expected);
});
test('girar hacia la izquierda', () => {
  const tree = parse('girar hacia la izquierda');
  const expected = new Turn(0, 24, 'izquierda');
  expect(tree.elements[0].elements[0]).toStrictEqual(expected);
});

// Branch
test('branch', () => {
  const tree = parse('si hay pared adelante ( avanzar )');
  const condition = new LookAheadCondition(3, 21, null, 'pared', 'adelante');
  // TODO: find better assertion for partial object
  expect(tree.elements[0].elements[0].condition.location).toStrictEqual(condition.location);
  expect(tree.elements[0].elements[0].condition.not).toStrictEqual(condition.not);
});

// Loop
test('loop', () => {
  const tree = parse('mientras hay pared adelante ( avanzar )');
  const condition = new LookAheadCondition(9, 27, null, 'pared', 'adelante');
  // TODO: find better assertion for partial object
  expect(tree.elements[0].elements[0].condition.location).toStrictEqual(condition.location);
  expect(tree.elements[0].elements[0].condition.not).toStrictEqual(condition.not);
});
