/* To print the following pattern

* * * * *
* * * *
* * *
* * 
*

*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let stairs = "";
    for (let j = 0; j <= n; j++) {
      if (i <= j) {
        stairs += "* ";
      }
    }
    console.log(stairs);
  }
}

printPattern(5);
