const swapNum = require('./swapNum.js');

test('Swapping of two numbers',()=>{
	expect(swapNum(1,2)).toBe((2,1));
});

test('Swapping of two numbers',()=>{
	expect(swapNum(12,24)).toBe((24,12));
});

test('Swapping of two numbers',()=>{
	expect(swapNum(111,333)).toBe((333,111));
});