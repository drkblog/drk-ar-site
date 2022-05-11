const STORAGE_PROGRAM_PREFIX = 'sidila-program-';
const PROGRAM_NAME_REGEX = /\w{2,20}/g;

export class Storage {

  static requireValidProgramName(name) {
    if (!name.match(PROGRAM_NAME_REGEX)) {
      throw new Error('Nombre de programa inválido');
    }
  }

  listSavedPrograms() {
    const list = [];
    for (let i=0, len=localStorage.length; i < len; ++i) {
      if (localStorage.key(i).startsWith(STORAGE_PROGRAM_PREFIX)) {
        list.push(Storage.getFilenameFromKey(localStorage.key(i)));
      }
    }
    return list;
  }
  loadProgram(name) {
    Storage.requireValidProgramName(name);
    const key = Storage.getKeyFromFilename(name);
    if (key != undefined && key != '') {
      return localStorage.getItem(key);
    }
  }
  saveProgram(name, program, overwrite) {
    Storage.requireValidProgramName(name);
    const key = Storage.getKeyFromFilename(name);
    if (localStorage.getItem(key) !== null && !overwrite.checked) {
      throw new Error('Ya existe un programa con ese nombre');
    }
    localStorage.setItem(key, program);
  }
  deleteProgram(name) {
    Storage.requireValidProgramName(name);
    const key = Storage.getKeyFromFilename(name);
    localStorage.removeItem(key);
  }

  static getKeyFromFilename(filename) {
    return STORAGE_PROGRAM_PREFIX + filename;
  }

  static getFilenameFromKey(key) {
    return key.substring(STORAGE_PROGRAM_PREFIX.length, key.length);
  }
}