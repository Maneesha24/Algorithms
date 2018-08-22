function BinToDec(num) {
  let rem,
    result = 0,
    count = 0;
  while (Math.floor(num) > 0) {
    rem = num % 10;
    result += rem * Math.pow(2, count);
    num = Math.floor(num / 10);
    count++;
  }
  return result;
}

module.exports = BinToDec;
