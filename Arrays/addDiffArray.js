function addDiffArray(arrayA, arrayB) {
  let output = [];
  for (let i = 0; i < arrayA.length; i++) {
    output.push(arrayA[i] + arrayB[i]);
  }
  return output;
}

module.exports = addDiffArray;
