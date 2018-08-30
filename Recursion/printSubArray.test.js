const printSubArray = require("./printSubArray.js");

test("To print the sub array values", () => {
  expect(printSubArray([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

test("To print the sub array values", () => {
  expect(printSubArray([[11, 12, 13], 14, 15])).toEqual([11, 12, 13, 14, 15]);
});

test("To print the sub array values", () => {
  expect(printSubArray([[21, 25, 27], [54, 57]])).toEqual([21, 25, 27, 54, 57]);
});
