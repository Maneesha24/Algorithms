function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    let temp;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
