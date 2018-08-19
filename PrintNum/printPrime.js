function printPrime(n) {
  const output = [];
  for (let i = 2; i <= n; i++) {
    let count = 0,
      isPrime = false;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      output.push(i);
    }
  }
  return output;
}

module.exports = printPrime;
