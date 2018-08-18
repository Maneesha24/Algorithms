const reverseNum = require("./reverseNum.js");

test("To reverse a given number", () => {
  expect(reverseNum(123)).toBe(321);
});

test("To reverse a given number", () => {
  expect(reverseNum(-456)).toBe(-654);
});

test("To reverse a given number", () => {
  expect(reverseNum(-12973)).toBe(-37921);
});
