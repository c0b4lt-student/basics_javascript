const data = ['Paul', 'Jean', 'Marie', 'Nicolas', 'Julie', 'Lola', 'Martin', 'Armand', 'Amandine'];
const dataSorted = [];

data.sort();

data.forEach(function(name) {
  const indexLetter = dataSorted.findIndex(function(objet) {
    return name.substring(0, 1).toLocaleLowerCase() === objet.letter.toLocaleLowerCase();
  });
  if (indexLetter !== -1) {
    dataSorted[indexLetter].names.push(name);
  } else {
    dataSorted.push({letter: name.substring(0, 1), names: [name]});
  }
});
console.log(dataSorted);