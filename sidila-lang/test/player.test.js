import { LogicBlock, CardinalDirection, Player, Zombie, Board, MoveDirection } from '../src/game/board';

// Zombie
test('zombie movable', () => {
  const zombie = new Zombie(3, 4, CardinalDirection.North);
  expect(zombie.isAt(3, 4)).toBe(true);
});
test('zombie crashable', () => {
  const zombie = new Zombie(3, 4, CardinalDirection.North);
  zombie.crash();
  expect(zombie.crashed).toBe(true);
});
test('zombie sprites', () => {
  const theme = {
    sprite: {
      'zombie': 1,
      'deadZombie': 2
    }
  };
  const zombie = new Zombie(3, 4, CardinalDirection.North);
  zombie.setupSprites(theme);
  expect(zombie.getSprite()).toBe(1);
  zombie.crash();
  expect(zombie.getSprite()).toBe(2);
});

// Player
test('player movable', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  expect(player.isAt(3, 4)).toBe(true);
});
test('player move direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  player.move(MoveDirection.Forth);
  expect(player.isAt(3, 3)).toBe(true);
});
test('player move direction back', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  player.move(MoveDirection.Back);
  expect(player.isAt(3, 5)).toBe(true);
});
test('player wouldMove direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  const target = player.wouldMove(MoveDirection.Forth);
  expect(target).toStrictEqual({x: 3, y: 3});
  expect(player.isAt(3, 4)).toBe(true);
});
test('player wouldMove direction back', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  const target = player.wouldMove(MoveDirection.Back);
  expect(target).toStrictEqual({x: 3, y: 5});
  expect(player.isAt(3, 4)).toBe(true);
});
test('player wouldMoveTo direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  const result = player.wouldMoveTo(MoveDirection.Forth, 3, 3);
  expect(result).toBe(true);
  expect(player.isAt(3, 4)).toBe(true);
});
test('player wouldMoveTo direction back', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  const result = player.wouldMoveTo(MoveDirection.Back, 3, 5);
  expect(result).toBe(true);
  expect(player.isAt(3, 4)).toBe(true);
});
test('player rotateLeft and wouldMove direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  player.rotateLeft();
  const target = player.wouldMove(MoveDirection.Forth);
  expect(target).toStrictEqual({x: 2, y: 4});
  expect(player.isAt(3, 4)).toBe(true);
});
test('player rotateRight and wouldMove direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  player.rotateRight();
  const target = player.wouldMove(MoveDirection.Forth);
  expect(target).toStrictEqual({x: 4, y: 4});
  expect(player.isAt(3, 4)).toBe(true);
});
test('player rotateBack and wouldMove direction forth', () => {
  const player = new Player(3, 4, CardinalDirection.North);
  player.rotateBack();
  const target = player.wouldMove(MoveDirection.Forth);
  expect(target).toStrictEqual({x: 3, y: 5});
  expect(player.isAt(3, 4)).toBe(true);
});
