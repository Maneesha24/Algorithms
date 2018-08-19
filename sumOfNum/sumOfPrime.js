function sumOfPrime(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      sum += i;
    }
  }
  return sum;
}

module.exports = sumOfPrime;
