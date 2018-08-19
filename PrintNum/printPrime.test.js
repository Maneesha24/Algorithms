const printPrime = require("./printPrime.js");

test("To print all prime numbers between 1 to n", () => {
  expect(printPrime(11)).toEqual([2, 3, 5, 7, 11]);
});

test("To print all prime numbers between 1 to n", () => {
  expect(printPrime(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

test("To print all prime numbers between 1 to n", () => {
  expect(printPrime(50)).toEqual( [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
});

