const APPLEPRICE = 0.32;
const PEARPRICE = 0.44;

function calc_price() {
  let nbApple = prompt('Combien avez-vous vendu de pommes : ');
  let nbPear = prompt('Combien avez-vous vendu de poires : ');

  return (nbApple * APPLEPRICE + nbPear * PEARPRICE);
}

alert(Math.round(calc_price() * 100) / 100);
