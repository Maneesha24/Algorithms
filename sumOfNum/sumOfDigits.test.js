const sumOfDigits = require('./sumOfDigits.js');

test('To find the sum of digits',()=>{
	expect(sumOfDigits(123)).toBe(6);
});

test('To find the sum of digits',()=>{
	expect(sumOfDigits(35739)).toBe(27);
});

test('To find the sum of digits',()=>{
	expect(sumOfDigits(32842)).toBe(19);
});