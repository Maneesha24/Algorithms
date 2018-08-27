const hasUniqueValues = require("./hasUniqueValues.js");

test("To check if the array has unique values", () => {
  expect(hasUniqueValues([1, 1, 2, 3, 4, 4, 5])).toBe(5);
});

test("To check if the array has unique values", () => {
  expect(hasUniqueValues([])).toBe(0);
});

test("To check if the array has unique values", () => {
  expect(hasUniqueValues([1,2,2,3,4,5,5,6,7,7,8])).toBe(8);
});;


