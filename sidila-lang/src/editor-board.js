import { LogicBlock, CardinalDirection, Player, Board } from './board';

export class EditorBoard extends Board {
  constructor() {
    super();
  }

  load(source) {
    const scene = JSON.parse(source);
    this.loadScene(scene);
  }
}
