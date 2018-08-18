const palindromeString = require('./palindromeString.js');

test('To check if the string is palindrome',()=>{
	expect(palindromeString("wow")).toBe(true);
});


test('To check if the string is palindrome',()=>{
	expect(palindromeString("batman")).toBe(false);
});

test('To check if the string is palindrome',()=>{
	expect(palindromeString("Malayalam")).toBe(false);
});

