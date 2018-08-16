const quadEqRoots = require("./quadEqRoots.js");

test("To find the roots of a quadratic equation", () => {
  expect(quadEqRoots(1, 5, 6)).toBe((-2, -3));
});

test("To find the roots of a quadratic equation", () => {
  expect(quadEqRoots(2, -4, -3)).toBe((2.58 , -0.58));
});

test("To find the roots of a quadratic equation", () => {
  expect(quadEqRoots(1, 2, -1)).toBe((0.41, -2.41));
});
