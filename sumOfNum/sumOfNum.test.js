const sumOfNum = require("./sumOfNum.js");

test("To find the sum of n numbers", () => {
  expect(sumOfNum(10)).toBe(55);
});

test("To find the sum of n numbers", () => {
  expect(sumOfNum(50)).toBe(1275);
});


test("To find the sum of n numbers", () => {
  expect(sumOfNum(135)).toBe(9180);
});
