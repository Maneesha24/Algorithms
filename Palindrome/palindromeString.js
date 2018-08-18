function palindromeString(str) {
  let temp;
  let reversal = str.split("");
  for (let i = 0; i < reversal.length / 2; i++) {
    temp = reversal[i];
    reversal[i] = reversal[reversal.length - i - 1];
    reversal[reversal.length - i - 1] = temp;
  }
  reversal = reversal.join("");
  return reversal == str;
}

module.exports = palindromeString;
