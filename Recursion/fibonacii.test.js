const fibonacii = require('./fibonacii.js');

test('To print the nth fib series using recursion',()=>{
	expect(fibonacii(1)).toBe(1);
});

test('To print the nth fib series using recursion',()=>{
	expect(fibonacii(3)).toBe(3);
});

test('To print the nth fib series using recursion',()=>{
	expect(fibonacii(7)).toBe(21);
});