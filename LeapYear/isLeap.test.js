const isLeap = require('./isLeap.js');

test('To check if the year is a leap year',()=>{
	expect(isLeap(1997)).toBe(false);
});

test('To check if the year is a leap year',()=>{
	expect(isLeap(1600)).toBe(true);
});

test('To check if the year is a leap year',()=>{
	expect(isLeap(1700)).toBe(false);
});