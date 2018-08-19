function isArmstrong(num) {
  let number1 = num,
    number2 = num,
    digits = 0,
    rem,
    output = 0;
  while (Math.floor(number1) > 0) {
    number1 = Math.floor(number1 / 10);
    digits++;
  }
  while (Math.floor(number2) > 0) {
    rem = number2 % 10;
    output += Math.pow(rem, digits);
    number2 = Math.floor(number2 / 10);
  }
  return output == num;
}

module.exports = isArmstrong;
