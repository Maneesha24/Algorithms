/* To print the following pattern

A 
B C 
D E F
G H I J
K L M N O

*/

function alphPattern(n) {
  let count = 65;
  for (i = 1; i <= n; i++) {
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
