export class CodeMirrorHelper {
  constructor(codeMirror, debugClassName, errorClassName) {
    this.codeMirror = codeMirror;
    this.debugClassName = debugClassName;
    this.errorClassName = errorClassName;
  }

  highlight(location) {
    const start = this.codeMirror.posFromIndex(location.start);
    const end = this.codeMirror.posFromIndex(location.end);
    this.clearHighlight();
    this.lastHighlightMarker = this.codeMirror.markText(start, end, { className: this.debugClassName});
    this.codeMirror.scrollIntoView(start);
  }

  clearHighlight() {
    if (this.lastHighlightMarker != undefined) {
      this.lastHighlightMarker.clear();
    }
  }

  markError(error) {
    const lineString = error.match(/^Line ([0-9]+)/)[1];
    const shiftString = error.match(/([ ]+)\^$/)[1];
    const line = parseInt(lineString) - 1;
    const shift = shiftString.length - 9;
    const start = { line: line, ch: shift };
    const end = { line: line, ch: shift + 1 };
    this.lastErrorMarker = this.codeMirror.markText(start, end, { className: this.errorClassName});
    this.codeMirror.scrollIntoView(start);
  }

  clearError() {
    if (this.lastErrorMarker != undefined) {
      this.lastErrorMarker.clear();
    }
  }
}