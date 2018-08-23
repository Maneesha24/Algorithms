const arrayProd = require("./arrayProd.js");

test("To multiply the array elements", () => {
  expect(arrayProd([1, 2, 3, 4])).toBe(24);
});

test("To multiply the array elements", () => {
  expect(arrayProd([1, 2, 3, 4, 5, 6, 7])).toBe(5040);
});

test("To multiply the array elements", () => {
  expect(arrayProd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(39916800);
});
