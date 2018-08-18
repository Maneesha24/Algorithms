const fibonacii = require("./fibonacii.js");

test("To print the fibonacii series", () => {
  expect(fibonacii(3)).toEqual([0, 1, 1]);
});

test("To print the fibonacii series", () => {
  expect(fibonacii(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test("To print the fibonacii series", () => {
  expect(fibonacii(15)).toEqual( [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
});
