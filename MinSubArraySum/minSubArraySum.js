function minSubArraySum(array, target) {
  let total = 0,
    start = 0,
    end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    if (total < target && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= target) {
      minLen = Math.min(Infinity, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArraySum;
