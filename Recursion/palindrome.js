function palindrome(string) {
  if (string.length <= 1) {
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1));
  }
  return false;
}

module.exports = palindrome;
