import { CardinalDirection, Board, Player } from './game-board';
import { AsciiPainter, BasicPainter } from './drawing';
import { Game } from './game';

export { CardinalDirection, Board, Player, AsciiPainter, BasicPainter, Game, maps };

const maps = require('../build/peg');

class Actions {
  make_move (input, start, end, elements) {
    return {action: 'move'};
  }
  make_turn (input, start, end, elements) {
    return {action: 'turn', direction: elements[1].text};
  }
};

export function parse(code) {
  return maps.parse(code, { actions: new Actions() })
}