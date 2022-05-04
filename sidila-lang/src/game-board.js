import { LogicBlock, CardinalDirection, Player, Board } from './board';

export class GameBoard extends Board {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    const scene = require('./scene/dungeon');
    this.loadScene(scene);
    this.player = new Player(
      this.scene.player.x,
      this.scene.player.y,
      CardinalDirection[this.scene.player.direction]
    );
    this.player.setupSprites(this.scene.theme);
  }

  canMoveInto(x, y) {
    const logic = this.getLogic(x, y);
    return logic === LogicBlock.Space || logic === LogicBlock.Exit;
  }

  isCrashed() {
    return this.player.crashed;
  }

  isDone() {
    return this.player.done;
  }

  movePlayer() {
    const newPosition = this.player.wouldMove();
    if (this.canMoveInto(newPosition.x, newPosition.y)) {
      this.player.move();
      if (this.getLogic(this.player.x, this.player.y) === LogicBlock.Exit) {
        this.player.finish();
      }
    } else {
      this.player.crash();
    }
  }
  rotatePlayerLeft() {
    this.player.rotateLeft();
  }
  rotatePlayerRight() {
    this.player.rotateRight();
  }
  playerShoot() {
    const shootAt = this.player.getShootTarget();
    if (this.getLogic(shootAt.x, shootAt.y) === LogicBlock.Zombie) {
      this.scene.map[shootAt.x][shootAt.y] = this.scene.space;
    }
  }
  getLogicInFrontOfPlayer() {
    const inFrontPosition = this.player.wouldMove();
    return this.getLogic(inFrontPosition.x, inFrontPosition.y);
  }

  getSprite(x, y) {
    return super.getSprite(x, y);
  }

  getOverlaySprite(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSprite();
    }
    if (this.player.wouldMoveTo(x, y)) {
      return this.player.getNextMoveSprite();
    }
    return null;
  }
}
