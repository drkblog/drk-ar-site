import { LogicBlock, CardinalDirection, Player, Board } from './board';

export class GameBoard extends Board {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    const scene = require('./scene/dungeon');
    this.loadScene(scene);
    this.player = new Player(2, 2, CardinalDirection.East);
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
    return this.getLogic(this.player.x, this.player.y) === LogicBlock.Exit;
  }

  movePlayer() {
    const newPosition = this.player.wouldMove();
    console.log(`Will move to (${newPosition.x}, ${newPosition.y})`);
    if (this.canMoveInto(newPosition.x, newPosition.y)) {
      this.player.move();
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

  getSprite(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSprite();
    } else {
      return super.getSprite(x, y);
    }
  }
}
