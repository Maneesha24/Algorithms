const sumOfPrime = require("./sumOfPrime.js");

test("To add all prime numbers between 1 to n", () => {
  expect(sumOfPrime(11)).toBe(28);
});

test("To add all prime numbers between 1 to n", () => {
  expect(sumOfPrime(25)).toBe(100);
});

test("To add all prime numbers between 1 to n", () => {
  expect(sumOfPrime(50)).toBe(328);
});
