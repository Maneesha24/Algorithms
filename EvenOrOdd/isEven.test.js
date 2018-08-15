const isEven = require('./isEven.js');

test('To check if a num is even or odd',()=>{
	expect(isEven(3)).toBe(false);
});

test('To check if a num is even or odd',()=>{
	expect(isEven(1243546)).toBe(true);
});

test('To check if a num is even or odd',()=>{
	expect(isEven(1294924347)).toBe(false);
});