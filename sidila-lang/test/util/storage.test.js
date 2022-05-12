import { Storage } from '../../src/util/storage';
require('../mock/local-storage.mock')

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('save and list', () => {
    const storage = new Storage();
    const name = 'name';
    storage.saveProgram(name, 'program', false);
    expect(storage.listSavedPrograms()).toEqual([name]);
  });

  test('save and load', () => {
    const storage = new Storage();
    const name = 'name';
    const program = 'program';
    storage.saveProgram(name, program, false);
    expect(storage.loadProgram(name)).toEqual(program);
  });

  test('save and delete', () => {
    const storage = new Storage();
    const name = 'name';
    const program = 'program';
    storage.saveProgram(name, program, false);
    storage.deleteProgram(name);
    expect(storage.listSavedPrograms()).toEqual([]);
  });
});