const modNum = require("./modNum.js");

test("modulus of two numbers", () => {
  expect(modNum(4, 2)).toBe(0);
});

test("modulus of two numbers", () => {
  expect(modNum(13759, 3)).toBe(1);
});

test("modulus of two numbers", () => {
  expect(modNum(1234681, 5)).toBe(1);
});
