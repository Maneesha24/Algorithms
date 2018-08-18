const palindromeNum = require('./palindromeNum.js');

test('To check if the number is a palindrome',()=>{
	expect(palindromeNum(111)).toBe(true);
});

test('To check if the number is a palindrome',()=>{
	expect(palindromeNum(-3)).toBe(true);
});

test('To check if the number is a palindrome',()=>{
	expect(palindromeNum(-32323)).toBe(true);
});