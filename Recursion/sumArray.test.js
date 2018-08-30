const sumArray = require("./sumArray.js");

test("To print the sum of an array", () => {
  expect(sumArray([1, 2, 3])).toEqual(6);
});

test("To print the sum of an array", () => {
  expect(sumArray([1, 2, 3, 4, 5, 6, 7])).toEqual(28);
});

test("To print the sum of an array", () => {
  expect(sumArray([11, 42, 13, 41, 57])).toEqual(164);
});
