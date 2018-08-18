function palindromeNum(num) {
  let reverse = 0,rem;
  var number = num;
  if (number < 0) {
    number *= -1;
  } else {
    number = num;
  }
  while (Math.floor(number) > 0) {
    rem = number % 10;
    reverse = reverse * 10 + rem;
    number = Math.floor(number / 10);
  }
	return (Math.sign(num) * reverse == num);
}

module.exports = palindromeNum;
