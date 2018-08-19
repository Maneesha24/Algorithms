function printArmstrongNum(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    let num1 = i,num2 = i,digits = 0,rem,result = 0;
    while (Math.floor(num1) > 0) {
      num1 = Math.floor(num1 / 10);
      digits++;
    }
    while (Math.floor(num2) > 0) {
      rem = num2 % 10;
      result += Math.pow(rem, digits);
      num2 = Math.floor(num2 / 10);
    }
    if (result == i) {
      output.push(i);
    }
  }
  return output;
}

module.exports = printArmstrongNum;
