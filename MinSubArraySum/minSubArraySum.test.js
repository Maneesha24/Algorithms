const minSubArraySum = require("./minSubArraySum.js");

test("To find the min sub array length", () => {
  expect(minSubArraySum([1, 2, 3, 4, 2], 6)).toEqual(2);
});

test("To find the min sub array length", () => {
  expect(minSubArraySum([100, 250, 300, 42, 20], 400)).toEqual(2);
});

test("To find the min sub array length", () => {
  expect(minSubArraySum([1,2,4,6,7,2,3,9,3], 18)).toEqual(4);
});
