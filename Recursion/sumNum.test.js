const sumNum = require('./sumNum.js');

test('To find the sum of num',()=>{
	expect(sumNum(0)).toBe(0);
});

test('To find the sum of num',()=>{
	expect(sumNum(6)).toBe(21);
});

test('To find the sum of num',()=>{
	expect(sumNum(25)).toBe(325);
});

