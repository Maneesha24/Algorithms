const maxSubArraySum = require("./maxSubArraySum.js");

test("To find the first pair of elements whose sum is 0", () => {
  expect(maxSubArraySum([1, 1], 3)).toEqual(null);
});

test("To find the first pair of elements whose sum is 0", () => {
  expect(maxSubArraySum([1, 1, 2, 4, 3, 5, 6, 1, 7], 3)).toEqual(14);
});

test("To find the first pair of elements whose sum is 0", () => {
  expect(maxSubArraySum([11, 1, 2, 42, 3, 55, 6, 101, 7], 3)).toEqual(162);
});
