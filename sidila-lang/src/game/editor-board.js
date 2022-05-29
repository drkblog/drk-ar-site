import { Board } from './board';
import { EventBus } from '../util/event-bus';

const MAX_UNDO_ITEMS = 100;

export class EditorBoard extends Board {
  constructor() {
    super(new EventBus());
    this.undo = [];
  }

  load(source) {
    const scene = JSON.parse(source);
    this.loadScene(scene);
  }

  save() {
    return JSON.stringify(this.scene, null, 2);
  }

  setSlot(index, sprite) {
    const coordinates = this.getCoordinatesFor(index);
    if (this.scene.map[coordinates.y][coordinates.x] != sprite) {
      const oldSprite = this.scene.map[coordinates.y][coordinates.x];
      this.addUndo(() => this.scene.map[coordinates.y][coordinates.x] = oldSprite);
      this.scene.map[coordinates.y][coordinates.x] = sprite;
    }
  }

  addUndo(undoAction) {
    this.undo.push(undoAction);
    if (this.undo.length > MAX_UNDO_ITEMS) {
      this.undo.pop();
    }
  }

  undoLastAction() {
    const undoAction = this.undo.pop();
    if (undoAction !== undefined) {
      undoAction();
    }
  }

  getOverlaySprite(x, y) {
    return null;
  }
}
