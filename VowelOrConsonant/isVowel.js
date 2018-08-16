function isVowel(char) {
  let chars = char.toLowerCase();
  if (chars == "a" || chars == "e" || chars == "i" || chars == "o" || chars =="u") {
    return true;
  } else {
    return false;
  }
}

module.exports = isVowel;
