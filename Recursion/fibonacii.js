function fibonacii(num) {
  if (num <= 1) {
    return 1;
  } else {
    return fibonacii(num - 1) + fibonacii(num - 2);
  }
}

module.exports = fibonacii;
