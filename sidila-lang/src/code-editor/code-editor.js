export class CodeEditor {
  constructor(container) {
    this.container = container;
    this.setup();
  }

  setup() {
    this.container.classList.add('codeScroll');
    this.code = document.createElement('div');
    this.code.contentEditable = true;
    this.code.classList.add('codeText');
    this.container.appendChild(this.code);
  }

  getCode() {
    return HtmlTextProcessor.htmlToText(this.code.innerHTML);
  }

  setCode(code) {
    this.code.innerHTML = HtmlTextProcessor.textToHtml(code);
  }

  getLineCount() {
    return this.getCode().split('\n').length;
  }

  highlightRange(start, end) {
    const range = document.createRange();
    const sel = window.getSelection();
    
    range.setStart(this.code, start);
    range.setEnd(this.code, end);
    range.collapse(true);
    
    sel.removeAllRanges();
    sel.addRange(range);
  }
}


export class HtmlTextProcessor {
  static htmlToText(html) {
    let stripped = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
    stripped = stripped.replace(/<script([\s\S]*?)<\/script>/gi, '');
    stripped = stripped.replace(/<\/div>/ig, '\n');
    stripped = stripped.replace(/<\/li>/ig, '\n');
    stripped = stripped.replace(/<li>/ig, '  *  ');
    stripped = stripped.replace(/<\/ul>/ig, '\n');
    stripped = stripped.replace(/<\/p>/ig, '\n');
    stripped = stripped.replace(/<br\s*[\/]?>/gi, '\n');
    stripped = stripped.replace(/<[^>]+>/ig, '');
    stripped = stripped.replace(/\&nbsp\;/ig, ' ');
    return stripped;
  }

  static textToHtml(text) {
    const lines = text.replace(/ /g, '&nbsp;').split('\n');
    if (lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    return lines.map(line => `<div>${line}</div>`)
        .join('');
  }
}