/* To print the following pattern

A 
A B 
A B C
A B C D
A B C D E

*/

function alphPattern(n) {
  for (i = 1; i <= n; i++) {
    let count = 65;
	  let stairs = "";
    for (j = 1; j <= n; j++) {
      if (i >= j) {
        stairs += String.fromCharCode(count) + " ";
		  count++;
      }
    }
    console.log(stairs);
  }
}

alphPattern(5);


