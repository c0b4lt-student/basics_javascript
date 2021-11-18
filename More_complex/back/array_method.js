const webBrowsers = ['Opera', 'Safari', 'Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Edge'];

function isTextLengthGreaterThan5(element) {
  return element.length > 5
}

console.log(webBrowsers.every(isTextLengthGreaterThan5));
console.log(webBrowsers.sort());
const webBrowsersFiltred = webBrowsers.filter(isTextLengthGreaterThan5);
console.log(webBrowsersFiltred);
console.log(webBrowsersFiltred.join('-'));
