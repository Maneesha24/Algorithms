const lcm = require("./lcm.js");

test("To find the lcm of two numbers", () => {
  expect(lcm(6, 12)).toBe(12);
});

test("To find the lcm of two numbers", () => {
  expect(lcm(18, 12)).toBe(36);
});

test("To find the lcm of two numbers", () => {
  expect(lcm(24, 36)).toBe(72);
});
