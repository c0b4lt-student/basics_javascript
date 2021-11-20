const webBrowsers = ['Opera', 'Safari', 'Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Edge'];

function isTextLengthGreaterThan5(element) {
  return element.length > 5
}

/*console.log(webBrowsers.every(isTextLengthGreaterThan5));
console.log(webBrowsers.sort());
const webBrowsersFiltred = webBrowsers.filter(isTextLengthGreaterThan5);
console.log(webBrowsersFiltred);
console.log(webBrowsersFiltred.join('-')); */

let numbers = [98, 100, 102, 500, 10, '97', 'bonjour'];

let numbersFiltred = numbers.filter((cell) => parseInt(cell) <= 100)

console.log(numbersFiltred);