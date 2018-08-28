const reverseString = require("./reverseString.js");

test("To reverse a string using recursion", () => {
  expect(reverseString("Batman")).toBe("namtaB");
});

test("To reverse a string using recursion", () => {
  expect(reverseString("Abdul kalam")).toBe("malak ludbA");
});

test("To reverse a string using recursion", () => {
  expect(reverseString("")).toBe("");
});
