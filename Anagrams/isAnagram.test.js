const isAnagram = require('./isAnagram.js');

test('To check if the given strings are anagram',()=>{
	expect(isAnagram("ca","car")).toBe(false);
});

test('To check if the given strings are anagram',()=>{
	expect(isAnagram("batman","joker")).toBe(false);
});

test('To check if the given strings are anagram',()=>{
	expect(isAnagram("malayalam","malayalam")).toBe(true);
});