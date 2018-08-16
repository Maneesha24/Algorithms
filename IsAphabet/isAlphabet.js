function isAlphabet(char) {
  let chars = char.toLowerCase();
  if (chars >= "a" && char <= "z") {
    return true;
  } else {
    return false;
  }
}

module.exports = isAlphabet;
