function fizzbuzz(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      output.push("Fizzbuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(i);
    }
  }
  return output;
}

module.exports = fizzbuzz;
