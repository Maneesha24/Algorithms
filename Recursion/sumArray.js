function sumArray(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumArray(array.slice(1));
  }
}

module.exports = sumArray;
