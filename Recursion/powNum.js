function powNum(base,exponent){
	if(exponent==0){
		return 1;
	}else{
		return base* powNum(base,exponent-1);
	}
}

module.exports = powNum;