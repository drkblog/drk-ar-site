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
    for(let i=1; i<widget.length; i++) {
      widget.remove(i);
    }
  }

  static loadProgram(nameWidget, programWidget) {
    const key = nameWidget.options[nameWidget.selectedIndex].value;
    if (key != undefined && key != '') {
      programWidget.value = localStorage.getItem(key);
    }
  }
  static saveProgram(nameWidget, programWidget, overwrite) {
    const key = Storage.getKeyFromFilename(nameWidget.value);
    if (localStorage.getItem(key) !== null && !overwrite.checked) {
      throw new Error('Ya existe un programa con ese nombre');
    }
    localStorage.setItem(key, programWidget.value);
  }

  static getKeyFromFilename(filename) {
    return STORAGE_PROGRAM_PREFIX + filename;
  }

  static getFilenameFromKey(key) {
    return key.substring(STORAGE_PROGRAM_PREFIX.length, key.length);
  }
}