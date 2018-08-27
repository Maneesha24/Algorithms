function isAnagram(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const output = {};

  for (let i = 0; i < stringA.length; i++) {
    let char = stringA[i];
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }

  for (let i = 0; i < stringB.length; i++) {
    let char = stringB[i];
    if (!output[char]) {
      return false;
    } else {
      output[char] -= 1;
    }
  }

  return true;
}

module.exports = isAnagram;
