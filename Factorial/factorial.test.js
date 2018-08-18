const factorial = require('./factorial.js');

test('To find the factorial of a given number',()=>{
	expect(factorial(4)).toBe(24);
});

test('To find the factorial of a given number',()=>{
	expect(factorial(15)).toBe(1307674368000);
});

test('To find the factorial of a given number',()=>{
	expect(factorial(7)).toBe(5040);
});