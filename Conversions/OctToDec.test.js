const OctToDec = require('./OctToDec.js');

test('To convert octal to decimal',()=>{
	expect(OctToDec(10)).toBe(8);
});

test('To convert octal to decimal',()=>{
	expect(OctToDec(123474)).toBe(42812);
});

test('To convert octal to decimal',()=>{
	expect(OctToDec(12256)).toBe(5294);
});