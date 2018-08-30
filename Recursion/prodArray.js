function prodArray(array) {
  if (array.length == 0) {
    return 1;
  } else {
    return array[0] * prodArray(array.slice(1));
  }
}

module.exports = prodArray;
