let arr = [["tail", "body", "head"],["head", "body", "tail"]];

function fixTheMeerkat(arr) {
  for( let i; i < arr.length; i++) {
  arr.pop();
  arr = arr[i][i];
  }
 }

console.log(fixTheMeerkat());