const divNum = require("./divNum.js");

test("division of two numbers", () => {
  expect(divNum(4, 2)).toBe(2);
});

test("division of two numbers", () => {
  expect(divNum(333, 2)).toBe(166);
});

test("division of two numbers", () => {
  expect(divNum(137543, 7)).toBe(19649);
});
