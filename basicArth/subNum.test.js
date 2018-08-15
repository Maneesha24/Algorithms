const subNum = require("./subNum.js");

test("subtraction of two numbers", () => {
  expect(subNum(3, 1)).toBe(2);
});

test("subtraction of two numbers", () => {
  expect(subNum(7, 4)).toBe(3);
});

test("subtraction of two numbers", () => {
  expect(subNum(3, 10)).toBe(-7);
});
