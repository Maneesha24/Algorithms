const BinToDec = require('./BinToDec.js');

test('To convert binary to decimal',()=>{
	expect(BinToDec(10)).toBe(2);
});

test('To convert binary to decimal',()=>{
	expect(BinToDec(110110111)).toBe(439);
});

test('To convert binary to decimal',()=>{
	expect(BinToDec(10011)).toBe(19);
});