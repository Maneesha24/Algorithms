const prodArray = require("./prodArray.js");

test("To print the product of an array", () => {
  expect(prodArray([1, 2, 3])).toEqual(6);
});

test("To print the product of an array", () => {
  expect(prodArray([1, 2, 3, 4, 5, 6, 7])).toEqual(5040);
});

test("To print the product of an array", () => {
  expect(prodArray([11, 42, 13, 41, 57])).toEqual(14036022);
});
