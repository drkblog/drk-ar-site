const STORAGE_PROGRAM_PREFIX = 'sidila-program-';

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

  static loadProgram(nameWidget) {
    const key = nameWidget.options[nameWidget.selectedIndex].value;
    if (key != undefined && key != '') {
      return localStorage.getItem(key);
    }
  }
  static saveProgram(name, program, overwrite) {
    const key = Storage.getKeyFromFilename(name);
    if (localStorage.getItem(key) !== null && !overwrite.checked) {
      throw new Error('Ya existe un programa con ese nombre');
    }
    localStorage.setItem(key, program);
  }

  static getKeyFromFilename(filename) {
    return STORAGE_PROGRAM_PREFIX + filename;
  }

  static getFilenameFromKey(key) {
    return key.substring(STORAGE_PROGRAM_PREFIX.length, key.length);
  }
}