const products = [
  {
    product: "chaise",
    price: 120.50
  },
  {
    product: "table",
    price: 1200.99
  },
  {
    product: "vase",
    price: 420.01
  },
  {
    product: "canape",
    price: 12585.55
  }
]

function soldPrice(product, sold) {
  return (product['price'] - (product['price'] * sold / 100));
}

function roundDecimal(nb) {
  return (Math.round((nb * 100)) / 100);
}

function format_price(price) {
  let strPrice = price.toString();

  strPrice = strPrice.replace('.', ',');
  strPrice += '$';
  return (strPrice);
}

function  updatePrice(product, sold) {
  let soldedPrice = soldPrice(product, sold);
  let product_price_span = document.getElementById(product['product']);

  soldedPrice = roundDecimal(soldedPrice);
  soldedPrice = format_price(soldedPrice);
  product_price_span.innerHTML = soldedPrice;
}

products.forEach((product) => {
  updatePrice(product, 25);
})
