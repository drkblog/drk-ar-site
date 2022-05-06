import { LogicBlock, CardinalDirection, Player, Zombie, Board, MoveDirection } from './board';
import { Sound } from './sound';
import { SceneService } from './scene';

export class GameBoard extends Board {
  constructor() {
    super();
    this.sceneService = new SceneService();
    this.soundOn = true;
    this.sound = {
      step: new Sound('step.ogg'),
      bang: new Sound('bang.ogg'),
      win: new Sound('win.ogg'),
      gameover: new Sound('gameover.ogg')
    };
    this.reset(0);
  }

  reset(map) {
    const scene = this.sceneService.get(map);
    this.loadScene(scene);
    this.player = new Player(
      this.scene.player.x,
      this.scene.player.y,
      CardinalDirection[this.scene.player.direction]
    );
    this.zombie = new Zombie(
      this.scene.zombie.x,
      this.scene.zombie.y
    );
    this.player.setupSprites(this.scene.theme);
    this.zombie.setupSprites(this.scene.theme);
    this.moves = 0;
    this.shots = 0;
  }

  getSceneCount() {
    return this.sceneService.getSceneCount();
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

  movePlayer(moveDirection) {
    this.playSound(this.sound.step);
    const newPosition = this.player.wouldMove(moveDirection);
    if (this.canMoveInto(newPosition.x, newPosition.y)) {
      this.player.move(moveDirection);
      if (this.getLogicAround(this.player.x, this.player.y).includes(LogicBlock.Sphinx)) {
        this.player.crash();
      }
      if (this.getLogic(this.player.x, this.player.y) === LogicBlock.Exit) {
        this.playSound(this.sound.win);
        this.player.finish();
      }
    } else {
      this.player.crash();
    }
    if (this.player.crashed) {
      this.playSound(this.sound.gameover);
    }
    this.moves++;
  }
  rotatePlayerLeft() {
    this.player.rotateLeft();
  }
  rotatePlayerRight() {
    this.player.rotateRight();
  }
  playerShoot() {
    this.playSound(this.sound.bang);
    const shootAt = this.player.getShootTarget();
    if (this.getLogic(shootAt.x, shootAt.y) === LogicBlock.Zombie) {
      this.zombie.crash();
    }
    this.shots++;
  }
  getLogic(x, y) {
    if (this.zombie?.isAt(x, y)) {
      return LogicBlock.Zombie;
    }
    return super.getLogic(x, y);
  }
  getLogicAround(x, y) {
    // TODO: handle edge cases
    return [
      this.getLogic(x, y-1),
      this.getLogic(x, y+1),
      this.getLogic(x-1, y),
      this.getLogic(x+1, y),
    ];
  }
  getLogicInFrontOfPlayer() {
    const inFrontPosition = this.player.wouldMove(MoveDirection.Forth);
    return this.getLogic(inFrontPosition.x, inFrontPosition.y);
  }

  getSprite(x, y) {
    return super.getSprite(x, y);
  }

  getOverlaySprite(x, y) {
    if (this.player.isAt(x, y)) {
      return this.player.getSprite();
    }
    if (this.zombie?.isAt(x, y)) {
      return this.zombie.getSprite();
    }
    if (this.player.wouldMoveTo(MoveDirection.Forth, x, y)) {
      return this.player.getNextMoveSprite();
    }
    return null;
  }

  setSound(on) {
    this.soundOn = on;
  }

  playSound(fx) {
    if (this.soundOn) {
      fx.play();
    }
  }
}
