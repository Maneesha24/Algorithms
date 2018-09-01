const linearSearch = require("./linearSearch.js");

test("To search an element using linear search", () => {
  expect(linearSearch([14, 35, 33, 27, 10], 33)).toEqual(2);
});

test("To search an element using linear search", () => {
  expect(linearSearch([1, 4, 90, 42, 675, 5], 999)).toEqual(-1);
});

test("To search an element using linear search", () => {
  expect(linearSearch([5, 1, 33, 65, 21, 77], 77)).toEqual(5);
});
