function arrayAvg(array) {
  let sum = 0,
    avg;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  avg = sum / array.length;
  return avg;
}

module.exports = arrayAvg;
