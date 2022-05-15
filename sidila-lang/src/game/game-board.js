import { LogicBlock, CardinalDirection, Player, Zombie, Board, MoveDirection } from './board';
import { Sound } from '../sound';
import { SceneService } from '../scene';
import { Event } from './event';

export class GameBoard extends Board {
  constructor() {
    super();
    this.sceneService = new SceneService();
    this.soundOn = true;
    this.soundMap = {
      step: new Sound('step.ogg'),
      bang: new Sound('bang.ogg'),
      win: new Sound('win.ogg'),
      gameOver: new Sound('gameover.ogg')
    };
    this.subscribeEvents();
    this.reset(0);
  }

  // TODO: Let other classes subscribe events to simplify GameBoard 
  subscribeEvents() {
    this.eventBus.subscribe(Event.PlayerMoved.channelName, () => this.playSound(this.soundMap.step));
    this.eventBus.subscribe(Event.PlayerDied.channelName, () => this.playSound(this.soundMap.gameOver));
    this.eventBus.subscribe(Event.PlayerWon.channelName, (coordinates) => {
      this.animationService.trigger(coordinates.x, coordinates.y);
      this.playSound(this.soundMap.win);
    });
  }

  reset(sceneIndex) {
    const scene = this.sceneService.get(sceneIndex);
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
    this.publishNoDataEvent(Event.GameReset);
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

  // TODO: Publish events instead of triggering sound and animations
  movePlayer(moveDirection) {
    this.publishPlayerMoved(moveDirection);
    const newPosition = this.player.wouldMove(moveDirection);
    if (this.canMoveInto(newPosition.x, newPosition.y)) {
      this.player.move(moveDirection);
      if (this.getLogicAround(this.player.x, this.player.y).includes(LogicBlock.Sphinx)) {
        this.publishPlayerDied();
        this.player.crash();
      }
      if (this.getLogic(this.player.x, this.player.y) === LogicBlock.Exit) {
        this.publishPlayerWon({ x: this.player.x, y: this.player.y});
        this.player.finish();
      }
    } else {
      this.publishPlayerDied();
      this.player.crash();
    }
    this.moves++;
    if (this.player.crashed || this.player.done) {
      this.publishNoDataEvent(Event.GameFinished);
    }
  }
  rotatePlayerLeft() {
    this.player.rotateLeft();
  }
  rotatePlayerRight() {
    this.player.rotateRight();
  }
  playerShoot() {
    this.playSound(this.soundMap.bang);
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
  getLogicToTheLeftOfPlayer() {
    const atTheLeftPosition = this.player.getLeftPosition();
    return this.getLogic(atTheLeftPosition.x, atTheLeftPosition.y);
  }
  getLogicToTheRightOfPlayer() {
    const atTheRightPosition = this.player.getRightPosition();
    return this.getLogic(atTheRightPosition.x, atTheRightPosition.y);
  }

  getOverlaySprite(x, y, timestamp) {
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

  publishPlayerMoved(moveDirection) {
    this.eventBus.publish(Event.PlayerMoved.channelName, moveDirection);
  }
  publishPlayerDied() {
    this.eventBus.publish(Event.PlayerDied.channelName, null);
  }
  publishPlayerWon(coordinates) {
    this.eventBus.publish(Event.PlayerWon.channelName, coordinates);
  }
  publishNoDataEvent(event) {
    this.eventBus.publish(event.channelName, null);
  }
}
