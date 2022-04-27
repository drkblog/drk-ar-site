import { CardinalDirection, Board, Player } from './game-board';
import { AsciiPainter } from './drawing';
import { Game } from './game';

export { CardinalDirection, Board, Player, AsciiPainter, Game, maps };

const maps = require('../build/peg');
