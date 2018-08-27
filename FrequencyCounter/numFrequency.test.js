const numFrequency = require('./numFrequency.js');

test('To find if the freq count of nums is same',()=>{
	expect(numFrequency(18,81)).toBe(true);
});

test('To find if the freq count of nums is same',()=>{
	expect(numFrequency(183,81)).toBe(false);
});

test('To find if the freq count of nums is same',()=>{
	expect(numFrequency(1,81)).toBe(false);
});