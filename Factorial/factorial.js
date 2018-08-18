function factorial(num){
	let factorial = 1;
	for(let i=num;i>=1;i--){
		factorial = factorial * i;
	}
	return factorial;
}

module.exports = factorial;