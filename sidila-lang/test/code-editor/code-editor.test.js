import { HtmlTextProcessor } from '../../src/code-editor/code-editor';

// HTML to text
test('simple', () => {
  const html = '<div>Ejemplo de oración</div>';
  const expected = 'Ejemplo de oración\n';
  expect(HtmlTextProcessor.htmlToText(html)).toEqual(expected);
});
test('multiline', () => {
  const html = '<div>Ejemplo de oración</div><div>Y otra más</div>';
  const expected = 'Ejemplo de oración\nY otra más\n';
  expect(HtmlTextProcessor.htmlToText(html)).toEqual(expected);
});
test('multiline indent', () => {
  const html = '<div>Ejemplo de oración</div><div>&nbsp;&nbsp;Y otra más</div>';
  const expected = 'Ejemplo de oración\n  Y otra más\n';
  expect(HtmlTextProcessor.htmlToText(html)).toEqual(expected);
});

// Text to HTML
test('simple', () => {
  const text = 'Ejemplo de oración\n';
  const expected = '<div>Ejemplo de oración</div>';
  expect(HtmlTextProcessor.textToHtml(text)).toEqual(expected);
});
test('multiline', () => {
  const text = 'Ejemplo de oración\nY otra más\n';
  const expected = '<div>Ejemplo de oración</div><div>Y otra más</div>';
  expect(HtmlTextProcessor.textToHtml(text)).toEqual(expected);
});
test('multiline indent', () => {
  const text = 'Ejemplo de oración\n  Y otra más\n';
  const expected = '<div>Ejemplo de oración</div><div>&nbsp;&nbsp;Y otra más</div>';
  expect(HtmlTextProcessor.textToHtml(text)).toEqual(expected);
});