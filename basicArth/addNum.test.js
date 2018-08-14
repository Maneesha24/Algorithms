const addNum = require('./addNum.js');

test('addition of two numbers',()=>{
	expect(addNum(1,2)).toBe(3);
});

test('addition of two numbers',()=>{
	expect(addNum(3,5)).toBe(8);
});

test('addition of two numbers',()=>{
	expect(addNum(111,222)).toBe(333);
});
