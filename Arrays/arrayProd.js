function arrayProd(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}

module.exports = arrayProd;
