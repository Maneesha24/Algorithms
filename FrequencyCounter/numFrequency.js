function numFrequency(num1, num2) {
  const number1 = num1.toString();
  const number2 = num2.toString();

  if (number1.length !== number2.length) {
    return false;
  }
  const output = {};
  for (let i = 0; i < number1.length; i++) {
    let char = number1[i];
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
	
	for (let i = 0; i < number2.length; i++) {
    let char = number2[i];
    if (output[char]) {
      output[char] -= 1;
    } else {
      return false;
    }
  }
	return true;
}

module.exports = numFrequency;
