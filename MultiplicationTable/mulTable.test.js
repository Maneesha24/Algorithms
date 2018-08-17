const mulTable = require("./mulTable.js");

test("To print the multiplication table", () => {
  expect(mulTable(3)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
});

test("To print the multiplication table", () => {
  expect(mulTable(7)).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
});

test("To print the multiplication table", () => {
  expect(mulTable(11)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 110]);
});
