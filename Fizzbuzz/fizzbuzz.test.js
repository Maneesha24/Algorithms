const fizzbuzz = require("./fizzbuzz.js");

test("To print the fizzbuzz series", () => {
  expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
});

test("To print the fizzbuzz series", () => {
  expect(fizzbuzz(12)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz"
  ]);
});

test("To print the fizzbuzz series", () => {
  expect(fizzbuzz(20)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "Fizzbuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz"
  ]);
});
