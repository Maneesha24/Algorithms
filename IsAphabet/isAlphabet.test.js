const isAlphabet = require("./isAlphabet.js");

test("To check of the char is a alphabet", () => {
  expect(isAlphabet("c")).toBe(true);
});

test("To check of the char is a alphabet", () => {
  expect(isAlphabet("!")).toBe(false);
});


test("To check of the char is a alphabet", () => {
  expect(isAlphabet("/")).toBe(false);
});

