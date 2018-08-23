const arraySum = require("./arraySum.js");

test("To add the array elements", () => {
  expect(arraySum([1, 2, 3])).toBe(6);
});

test("To add the array elements", () => {
  expect(arraySum([1, 2, 3, 4, 5, 6, 7])).toBe(28);
});

test("To add the array elements", () => {
  expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});
