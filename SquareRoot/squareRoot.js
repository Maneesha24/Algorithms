function squareRoot(num){
	const res = Math.sqrt(num);
	return Math.round(res*100)/100;
}

module.exports = squareRoot;