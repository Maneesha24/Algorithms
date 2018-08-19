const sumOfArmstrong = require("./sumOfArmstrong.js");

test("To find the sum of armstrong numbers", () => {
  expect(sumOfArmstrong(10)).toBe(45);
});

test("To find the sum of armstrong numbers", () => {
  expect(sumOfArmstrong(200)).toBe(198);
});

test("To find the sum of armstrong numbers", () => {
  expect(sumOfArmstrong(450)).toBe(1346);
});
