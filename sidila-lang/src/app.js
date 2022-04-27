import { CardinalDirection, Board, Player } from './game-board';
import { AsciiPainter, BasicPainter } from './drawing';
import { Game } from './game';

export { CardinalDirection, Board, Player, AsciiPainter, BasicPainter, Game, maps };

const maps = require('../build/peg');
