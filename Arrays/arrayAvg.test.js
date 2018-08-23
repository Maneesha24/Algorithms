const arrayAvg = require("./arrayAvg.js");

test("To find the avg of array elements", () => {
  expect(arrayAvg([1, 2, 3])).toBe(2);
});

test("To find the avg of array elements", () => {
  expect(arrayAvg([1, 2, 3, 4, 5, 6, 7])).toBe(4);
});

test("To find the avg of array elements", () => {
  expect(arrayAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
});
