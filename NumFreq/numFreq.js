function numFreq(num) {
  let count = 0;
  while (Math.floor(num) > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

module.exports = numFreq;
