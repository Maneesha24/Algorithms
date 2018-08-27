const sumZero = require("./sumZero.js");

test("To find the first pair of elements whose sum is 0", () => {
  expect(sumZero([1, 1, 2, 3, 4, 4, -1])).toEqual([1,-1]);
});

test("To find the first pair of elements whose sum is 0", () => {
  expect(sumZero([1, 1, 2, 3, -3, 4, 5])).toEqual([3,-3]);
});

test("To find the first pair of elements whose sum is 0", () => {
  expect(sumZero([1, 1, 2, 3, 4, 4, -4])).toEqual([4,-4]);
});



