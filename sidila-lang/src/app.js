import { CardinalDirection, Board, Player } from './game-board';
import { CanvasPainter } from './drawing';
import { StepInterpreter } from './game';

export { CardinalDirection, Board, Player, CanvasPainter, StepInterpreter, maps };

const maps = require('../build/peg');

class Actions {
  make_move (input, start, end, elements) {
    return {action: 'move'};
  }
  make_shoot (input, start, end, elements) {
    return {action: 'shoot'};
  }
  make_turn (input, start, end, elements) {
    return {action: 'turn', direction: elements[1].text};
  }
};

export function parse(code) {
  return maps.parse(code, { actions: new Actions() })
}