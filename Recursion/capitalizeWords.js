function capitalizeWords(array){
	if(array.length===1){
		return [array[0].toUpperCase()];
	}
	const res = capitalizeWords(array.slice(0,-1));
	
	res.push(array.slice(array.length-1)[0].toUpperCase());
	return res;
}

module.exports = capitalizeWords;