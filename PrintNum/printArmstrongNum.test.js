const printArmstrongNum = require("./printArmstrongNum.js");

test("To print armstrong numbers between 1 to n", () => {
  expect(printArmstrongNum(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("To print armstrong numbers between 1 to n", () => {
  expect(printArmstrongNum(200)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 153]);
});

test("To print armstrong numbers between 1 to n", () => {
  expect(printArmstrongNum(500)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    153,
    370,
    371,
    407
  ]);
});
