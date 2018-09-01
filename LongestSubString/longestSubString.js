function longestSubString(string) {
  let result = {};
  let start = 0,
    longest = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (result[char]) {
      start = Math.max(start, result[char]);
    }
    longest = Math.max(longest, i - start + 1);
    result[char] = i + 1;
  }
  return longest;
}

module.exports = longestSubString;
