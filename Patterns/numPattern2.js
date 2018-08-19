/* To print the following pattern

1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1 

*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let stairs = "",count = 1;
    for (let j = 1; j <= n; j++) {
      if (i <= j) {
        stairs += count + " ";
		  count++;
      }
    }
    console.log(stairs);
  }
}

printPattern(5);
