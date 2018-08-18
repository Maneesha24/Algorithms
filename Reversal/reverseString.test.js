const reverseString = require("./reverseString.js");

test("To reverse the given string", () => {
  expect(reverseString("Batman")).toBe("namtaB");
});

test("To reverse the given string", () => {
  expect(reverseString("Game of thrones")).toBe("senorht fo emaG");
});

test("To reverse the given string", () => {
  expect(reverseString("Abdul Kalam")).toBe("malaK ludbA");
});
