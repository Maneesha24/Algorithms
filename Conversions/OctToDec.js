function OctToDec(n) {
 let rem,
    result = 0,
    count = 0;
  while (Math.floor(n) > 0) {
    rem = n % 10;
	 
    result += rem * Math.pow(8, count);
    n = Math.floor(n / 10);
    count++;
  }
  return result;
	
}

module.exports = OctToDec;
