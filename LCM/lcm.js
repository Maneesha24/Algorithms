function lcm(a, b) {
  let gcd, lcm;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  lcm = (a * b) / gcd;
  return lcm;
}

module.exports = lcm;
