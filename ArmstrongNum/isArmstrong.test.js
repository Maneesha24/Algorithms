const isArmstrong = require('./isArmstrong.js');

test('To check if the number is a armstrong number',()=>{
	expect(isArmstrong(371)).toBe(true);
});

test('To check if the number is a armstrong number',()=>{
	expect(isArmstrong(1634)).toBe(true);
});

test('To check if the number is a armstrong number',()=>{
	expect(isArmstrong(25)).toBe(false);
});