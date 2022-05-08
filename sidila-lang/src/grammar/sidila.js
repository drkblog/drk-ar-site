import { Move, Back, Shoot, Turn, Branch, Loop, LookAheadCondition, InGameCondition } from '../instruction';

const maps = require('../../build/peg');

class Actions {
  makeMove(input, start, end, elements) {
    return new Move(start, end);
  }
  makeBack(input, start, end, elements) {
    return new Back(start, end);
  }
  makeShoot(input, start, end, elements) {
    return new Shoot(start, end);
  }
  makeTurn(input, start, end, elements) {
    return new Turn(start, end, elements[1].text);
  }
  makeBranch(input, start, end, elements) {
    const condition = elements[1];
    const body = elements[2].elements;
    const elseBody = elements[3].elements[1]?.elements;
    return new Branch(start, end, condition, body, elseBody);
  }
  makeLoop(input, start, end, elements) {
    const condition = elements[1];
    const body = elements[2].elements;
    return new Loop(start, end, condition, body);
  }
  makeLookAheadCondition(input, start, end, elements) {
    const not = elements[0].text;
    const spriteLabel = elements[2].text;
    const lookUpDirection = elements[3].text
    return new LookAheadCondition(start, end, not, spriteLabel, lookUpDirection);
  }
  makeInGameCondition(input, start, end, elements) {
    return new InGameCondition(start, end, elements[0].text);
  }
}

export function parse(code) {
  return maps.parse(code, { actions: new Actions() })
}