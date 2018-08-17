function gcd(a, b) {
	let gcd;
	for(let i = 1; i<=a && i<=b;i++){
		if(a%i==0 && b%i==0){
gcd = i
		}
	}
	return gcd;
}

module.exports = gcd;
