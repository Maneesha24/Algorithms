const bubbleSort = require('./bubbleSort.js');

test('To the sort the array through bubbleSort',()=>{
expect(bubbleSort([14,35,33,27,10])).toEqual([10,14,27,33,35])
})