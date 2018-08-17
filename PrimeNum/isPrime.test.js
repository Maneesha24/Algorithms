const isPrime = require("./isPrime.js");

test("To check if the num is prime", () => {
  expect(isPrime(3)).toBe(true);
});

test("To check if the num is prime", () => {
  expect(isPrime(31)).toBe(true);
});


test("To check if the num is prime", () => {
  expect(isPrime(9)).toBe(false);
});
