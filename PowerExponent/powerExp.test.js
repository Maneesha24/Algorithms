const powerExp = require("./powerExp.js");

test("To find the power exponent", () => {
  expect(powerExp(2, 5)).toBe(32);
});

test("To find the power exponent", () => {
  expect(powerExp(10, 2)).toBe(100);
});

test("To find the power exponent", () => {
  expect(powerExp(25, 3)).toBe(15625);
});
