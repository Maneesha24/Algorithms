function fibonacii(num){
	const output = [0,1];
	for(let i=2; i<num;i++){
		const a = output[i-2];
		const b = output[i-1];
		output.push(a+b);
	}
	return output;
	
}

module.exports = fibonacii;