function run() {
  const htmlValue = document.querySelector('#html-code').value;
  const cssValue = document.querySelector('#css-code').value;
  const jsValue = document.querySelector('#js-code').value;
  const output = document.querySelector('#output');

  output.contentDocument.body.innerHTML = htmlValue + `<style>${cssValue}</style>`;
  output.contentWindow.eval(jsValue);

}
