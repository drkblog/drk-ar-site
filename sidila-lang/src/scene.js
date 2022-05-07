export class SceneService {
  constructor() {
    this.scenes = [
      require('./scene/dungeon-1'),
      require('./scene/dungeon-2'),
      require('./scene/dungeon-3'),
      require('./scene/dungeon-4')
    ]
  }

  get(index) {
    return this.scenes[index];
  }

  getSceneCount() {
    return this.scenes.length;
  }
}