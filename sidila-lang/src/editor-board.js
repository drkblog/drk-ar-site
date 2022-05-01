import { Board } from './board';

export class EditorBoard extends Board {
  constructor() {
    super();
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
}
