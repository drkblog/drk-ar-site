import { GameBoard } from './game-board';
import { EditorBoard } from './editor-board';
import { CanvasPainter, PalettePainter } from './drawing';
import { StepInterpreter } from './interpreter';
import { Move, Back, Shoot, Turn, Loop, Condition } from './instruction';
import { Storage } from './storage';
import { Score } from './score';

export { 
  EditorBoard,
  GameBoard,
  CanvasPainter,
  PalettePainter,
  StepInterpreter,
  Storage,
  Score,
  maps
};

const maps = require('../build/peg');

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
  makeLoop(input, start, end, elements) {
    return new Loop(start, end, elements[1], elements[2].elements);
  }
  makeCondition(input, start, end, elements) {
    return new Condition(start, end, elements[0].text, elements[2].text);
  }
}

export function parse(code) {
  return maps.parse(code, { actions: new Actions() })
}