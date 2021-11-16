//Swap no tmp
let nb1 = 25;
let nb2 = 59;
nb2 = nb1 + nb2; //nb2 = 15
nb1 = nb2 - nb1;  //nb1 = 5
nb2 = nb2 - nb1; //nb2 = 10

//strlen
let word = 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum orci augue, nec accumsan felis auctor vitae. Curabitur fringilla turpis massa, nec consequat enim condimentum sed. Proin vitae est id arcu eleifend vehicula. Integer nisi tortor, porta nec elit ac, elementum accumsan ligula. Nulla facilisi. Etiam dolor diam, iaculis eu viverra sit amet, lacinia a sem. Pellentesque finibus vel justo vitae pharetra. Curabitur eleifend hendrerit augue id aliquam. '
let i = 0;
while (word[i]) {
  i++;
}
console.log('la phrase contient ' + i + ' caratères');
i = 0;

//Count char in str
let cToFind = 'e';
let countC = 0;
for (let letter of word) {
  if (letter === cToFind)
    countC++;
}
console.log('La phrase contient ' + countC + ' ' + cToFind);

//bubble sort no tmp
let length = word.length;
for (let main = 0; main < length - 1; main++) {
  for (let cell = 0; cell < length - main - 1; cell++) {
    if (word[cell] > word[cell + 1]) {
      word[cell] = word[cell] + word[cell + 1];
      word[cell + 1] = word[cell] - word[cell + 1];
      word[cell] = word[cell] - word[cell + 1];
    }
  }
}
console.log(word);