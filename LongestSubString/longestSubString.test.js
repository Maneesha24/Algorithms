const longestSubString = require('./longestSubString.js');


test('To find the longest subString',()=>{
	expect(longestSubString('Abdul Kalam')).toBe(8);
});

test('To find the longest subString',()=>{
	expect(longestSubString('Batman')).toBe(4);
});

test('To find the longest subString',()=>{
	expect(longestSubString('Game of thrones')).toBe(9);
});