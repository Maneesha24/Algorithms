function mulTable(num){
	const output = [];
	for(let i = 1;i<=10;i++){
		output.push(num*i);
	}
	return output;
}

module.exports = mulTable;