const STORAGE_PROGRAM_PREFIX = 'sidila-program-';
const PROGRAM_NAME_REGEX = /\w{2,20}/g;

export class Storage {

  static loadFiles(selectWidget) {
    Storage.emptySelectWidget(selectWidget);
    for (let i=0, len=localStorage.length; i < len; ++i) {
      if (localStorage.key(i).startsWith(STORAGE_PROGRAM_PREFIX)) {
        const option = document.createElement("option");
        option.text = Storage.getFilenameFromKey(localStorage.key(i));
        option.value = localStorage.key(i);
        selectWidget.add(option);
      }
    }
  }

  static emptySelectWidget(widget) {
    const placeholder = [].filter.call(widget.options, option => option.value === "")[0];
    while(widget.length > 0) {
      widget.remove(widget.length - 1);
    }
    widget.add(placeholder);
  }

  static requireValidProgramName(name) {
    if (!name.match(PROGRAM_NAME_REGEX)) {
      throw new Error('Nombre de programa inválido');
    }
  }

  static loadProgram(name) {
    Storage.requireValidProgramName(name);
    const key = Storage.getKeyFromFilename(name);
    if (key != undefined && key != '') {
      return localStorage.getItem(key);
    }
  }
  static saveProgram(name, program, overwrite) {
    Storage.requireValidProgramName(name);
    const key = Storage.getKeyFromFilename(name);
    if (localStorage.getItem(key) !== null && !overwrite.checked) {
      throw new Error('Ya existe un programa con ese nombre');
    }
    localStorage.setItem(key, program);
  }
  static deleteProgram(name) {
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