const mulNum = require('./mulNum.js');

test('multiplication of two numbers',()=>{
	expect(mulNum(3,7)).toBe(21);
});

test('multiplication of two numbers',()=>{
	expect(mulNum(111,3)).toBe(333);
});

test('multiplication of two numbers',()=>{
	expect(mulNum(33,7)).toBe(231);
});