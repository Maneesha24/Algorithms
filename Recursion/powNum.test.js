const powNum = require("./powNum.js");

test("To find the power of a number using recursion", () => {
  expect(powNum(2, 10)).toBe(1024);
});

test("To find the power of a number using recursion", () => {
  expect(powNum(5, 7)).toBe(78125);
});

test("To find the power of a number using recursion", () => {
  expect(powNum(11,3)).toBe(1331);
});