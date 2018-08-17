const gcd = require('./gcd.js');

test('To find the gcd of two numbers',()=>{
	expect(gcd(6,12)).toBe(6);
});

test('To find the gcd of two numbers',()=>{
	expect(gcd(7,343)).toBe(7);
});

test('To find the gcd of two numbers',()=>{
	expect(gcd(15,18)).toBe(3);
});

