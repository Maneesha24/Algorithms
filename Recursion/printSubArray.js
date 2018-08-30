function printSubArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(printSubArray(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = printSubArray;
