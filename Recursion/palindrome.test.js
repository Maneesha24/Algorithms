const palindrome = require("./palindrome.js");

test("To check if the given string is a palindrome", () => {
  expect(palindrome("mannu")).toBe(false);
});

test("To check if the given string is a palindrome", () => {
  expect(palindrome("M")).toBe(true);
});

test("To check if the given string is a palindrome", () => {
  expect(palindrome("WOW")).toBe(true);
});
