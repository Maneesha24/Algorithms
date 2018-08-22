const factorial = require('./factorial.js');

test('To find the factorial',()=>{
	expect(factorial(0)).toBe(1);
});

test('To find the factorial',()=>{
	expect(factorial(6)).toBe(720);
});

test('To find the factorial',()=>{
	expect(factorial(10)).toBe(3628800);
});

