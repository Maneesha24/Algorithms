function sumNum(n){
	if(n<=0){
		return 0;
	}else{
		return n + sumNum(n-1);
	}
	
}

module.exports = sumNum;