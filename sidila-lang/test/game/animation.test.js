import { Animation, AnimationService } from '../../src/game/animation';

test('simple animation loops', () => {
  const animation = new Animation({ sprites: [1, 2, 3, 4], period: 10 });
  expect(animation.getSprite(0)).toEqual(1);
  expect(animation.getSprite(10)).toEqual(2);
  expect(animation.getSprite(20)).toEqual(3);
  expect(animation.getSprite(30)).toEqual(4);
  expect(animation.getSprite(31)).toEqual(4);
  expect(animation.getSprite(40)).toEqual(1);
  expect(animation.getSprite(50)).toEqual(2);
});

test('simple animation service', () => {
  const animations = {
    "7,13" : { sprites: [1, 2, 3, 4], period: 10 },
    "2,5" : { sprites: [1, 2, 3, 4], period: 10 }
  };
  const animationService = new AnimationService(animations);
  expect(animationService.getSprite(7, 13, 50)).toEqual(2);
  expect(animationService.getSprite(2, 5, 0)).toEqual(1);
  expect(animationService.getSprite(1, 1, 1)).toBeUndefined();
});