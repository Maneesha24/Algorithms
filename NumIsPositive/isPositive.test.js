const isPositive = require("./isPositive.js");

test("To check if a number is a positive", () => {
	expect(isPositive(5)).toBe(true);
});

test("To check if a number is a positive", () => {
	expect(isPositive(-5)).toBe(false);
});

test("To check if a number is a positive", () => {
	expect(isPositive(0)).toBe(true);
});
