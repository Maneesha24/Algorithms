const minValue = require('./minValue.js');

test('Minimum of three values',()=>{
	expect(minValue(1,2,3)).toBe(1);
});

test('Minimum of three values',()=>{
	expect(minValue(45,32,77)).toBe(32);
});

test('Minimum of three values',()=>{
	expect(minValue(111,22,347)).toBe(22);
});