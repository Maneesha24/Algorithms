const squareRoot = require('./squareRoot.js');

test('To find the square root of a number',()=>{
	expect(squareRoot(16)).toBe(4);
});


test('To find the square root of a number',()=>{
	expect(squareRoot(357)).toBe(18.89);
});

test('To find the square root of a number',()=>{
	expect(squareRoot(9409)).toBe(97);
})