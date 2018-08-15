const maxValue = require('./maxValue.js');

test('To find the maximum of three values',()=>{
	expect(maxValue(1,2,3)).toBe(3);
});

test('To find the maximum of three values',()=>{
	expect(maxValue(124,242,31)).toBe(242);
});

test('To find the maximum of three values',()=>{
	expect(maxValue(134,2421,31347)).toBe(31347);
});