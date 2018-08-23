const addDiffArray = require("./addDiffArray.js");

test("To find the max num in the array", () => {
  expect(addDiffArray([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
});

test("To find the max num in the array", () => {
  expect(addDiffArray([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 9, 3])).toEqual([
    5,
    7,
    9,
    11,
    13,
    15,
    10
  ]);
});

test("To find the max num in the array", () => {
  expect(
    addDiffArray([10, 13, 15, 7, 8, 9, 10], [21, 23, 31, 4, 5, 1, 90])
  ).toEqual([31, 36, 46, 11, 13, 10, 100]);
});
