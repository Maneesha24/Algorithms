const numFreq = require("./numFreq.js");

test("To find the frequency of a num", () => {
  expect(numFreq(7)).toBe(1);
});


test("To find the frequency of a num", () => {
  expect(numFreq(33)).toBe(2);
});

test("To find the frequency of a num", () => {
  expect(numFreq(25725)).toBe(5);
});

