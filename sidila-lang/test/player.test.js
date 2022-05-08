import { LogicBlock, CardinalDirection, Player, Zombie, Board, MoveDirection } from '../src/board';

// Zombie
test('zombie movable', () => {
  const zombie = new Zombie(3, 4);
  expect(zombie.isAt(3, 4)).toBe(true);
});
test('zombie crashable', () => {
  const zombie = new Zombie(3, 4);
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
  const zombie = new Zombie(3, 4);
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