const bubbleSort = require("./bubbleSort.js");

test("To the sort the array through bubbleSort", () => {
  expect(bubbleSort([14, 35, 33, 27, 10])).toEqual([10, 14, 27, 33, 35]);
});

test("To the sort the array through bubbleSort", () => {
  expect(bubbleSort([1, 4, 90, 42, 675, 5])).toEqual([1, 4, 5, 42, 90, 675]);
});

test("To the sort the array through bubbleSort", () => {
  expect(bubbleSort([5, 1, 33, 65, 21, 77])).toEqual([1, 5, 21, 33, 65, 77]);
});
