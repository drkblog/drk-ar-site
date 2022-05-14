import { LoopAnimation, TwoWaysAnimation, AnimationService } from '../../src/game/animation';

test('loop animation', () => {
  const animation = new LoopAnimation({ sprites: [1, 2, 3, 4], period: 10 });
  expect(animation.getSprite(0)).toEqual(1);
  expect(animation.getSprite(10)).toEqual(2);
  expect(animation.getSprite(20)).toEqual(3);
  expect(animation.getSprite(30)).toEqual(4);
  expect(animation.getSprite(31)).toEqual(4);
  expect(animation.getSprite(40)).toEqual(1);
  expect(animation.getSprite(50)).toEqual(2);
});

test('two-ways animation', () => {
  const animation = new TwoWaysAnimation({ sprites: [1, 2, 3, 4], period: 10 });
  expect(animation.getSprite(0)).toEqual(1);
  expect(animation.getSprite(10)).toEqual(1);
  expect(animation.getSprite(20)).toEqual(1);
  expect(animation.getSprite(30)).toEqual(1);
  animation.launch();
  expect(animation.getSprite(0)).toEqual(1);
  expect(animation.getSprite(10)).toEqual(2);
  expect(animation.getSprite(20)).toEqual(3);
  expect(animation.getSprite(30)).toEqual(4);
  expect(animation.getSprite(31)).toEqual(4);
  expect(animation.getSprite(40)).toEqual(4);
  expect(animation.getSprite(50)).toEqual(4);
  animation.launch();
  expect(animation.getSprite(110)).toEqual(4);
  expect(animation.getSprite(120)).toEqual(3);
  expect(animation.getSprite(130)).toEqual(2);
  expect(animation.getSprite(140)).toEqual(1);
  expect(animation.getSprite(150)).toEqual(1);
});

test('simple animation service', () => {
  const animations = {
    "7,13" : { 
      type: "loop",
      settings: { sprites: [1, 2, 3, 4], period: 10 }
    },
    "2,5" :  { 
      type: "loop",
      settings: { sprites: [1, 2, 3, 4], period: 10 }
    },
    "1,5": {
      type: "two-ways",
      settings: { sprites: [1, 2, 3, 4], period: 10 }
    }
  };
  const animationService = new AnimationService(animations);
  expect(animationService.getSprite(7, 13, 50)).toEqual(2);
  expect(animationService.getSprite(2, 5, 0)).toEqual(1);
  expect(animationService.getSprite(1, 1, 1)).toBeUndefined();
});