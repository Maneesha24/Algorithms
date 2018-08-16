const isVowel = require('./isVowel.js');

test('To check if the char is a vowel',()=>{
	expect(isVowel('a')).toBe(true);
});

test('To check if the char is a vowel',()=>{
	expect(isVowel('E')).toBe(true);
});

test('To check if the char is a vowel',()=>{
	expect(isVowel('M')).toBe(false);
});