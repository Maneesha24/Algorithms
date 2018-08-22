function floydTriangle(n){
	let count = 1
  for (let i = 1; i <= n; i++) {
    let stairs = "";
    for (let j = 1; j <= n; j++) {
      if (i >= j) {
        stairs += count + " ";
		  count++;
      }
    }
    console.log(stairs);
  }
}

floydTriangle(5);

