import { Board } from './board';
import { EventBus } from '../util/event-bus';

export class EditorBoard extends Board {
  constructor() {
    super(new EventBus());
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
    this.scene.map[coordinates.y][coordinates.x] = sprite;
  }

  getOverlaySprite(x, y) {
    return null;
  }
}
