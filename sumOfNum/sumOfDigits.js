function sumOfDigits(num) {
  let sum = 0,rem;
  while (Math.floor(num) > 0) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
}

module.exports = sumOfDigits;
