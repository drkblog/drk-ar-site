export class ProgramListDropDownHandler {
  constructor(storage, selectWidget) {
    this.storage = storage;
    this.selectWidget = selectWidget;
  }

  loadFiles() {
    this.emptySelectWidget();
    this.storage.listSavedPrograms().forEach(item => {
      const option = document.createElement("option");
      option.text = item;
      option.value = item;
      this.selectWidget.add(option);
    });
  }

  emptySelectWidget() {
    const placeholder = [].filter.call(this.selectWidget.options, option => option.value === "")[0];
    while(this.selectWidget.length > 0) {
      this.selectWidget.remove(this.selectWidget.length - 1);
    }
    this.selectWidget.add(placeholder);
  }

  getSelectedProgram() {
    const name = this.selectWidget.options[this.selectWidget.selectedIndex].value;
    return this.storage.loadProgram(name);
  }
}