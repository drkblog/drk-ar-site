import { GameBoard } from './game-board';
import { EditorBoard } from './editor-board';
import { CanvasPainter, PalettePainter } from './drawing';
import { StepInterpreter } from './interpreter';
import { Move, Shoot, Turn, Loop, Condition } from './instruction';

export { EditorBoard, GameBoard, CanvasPainter, PalettePainter, StepInterpreter, maps };

const maps = require('../build/peg');

class Actions {
  makeMove(input, start, end, elements) {
    return new Move(start, end);
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
    return new Condition(start, end, elements[1].text);
  }
}

export function parse(code) {
  return maps.parse(code, { actions: new Actions() })
}