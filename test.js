// let repeat = (n, action) => {
//     for(let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(3, console.log);

// let labels = [];
// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);
// // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

let noisy = (f) => {
    return (...args) => {
        console.log('calling with', args);
        let result = f(...args);
        console.log('called with', args, ', returned', result);
        return result;
    }
}
// function noisy(f) {
//     return (...args) => {
//       console.log("calling with", args);
//       let result = f(...args);
//       console.log("called with", args, ", returned", result);
//       return result;
//     };
//   }
  noisy(Math.min)(3, 2, 1);
  // → calling with [3, 2, 1]
  // → called with [3, 2, 1] , returned 1

// let unless = (test, then) => {
//     if (!test) then();
// }

// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, 'is even');
//     });
// });

arr = [1, 2, 3, 4, 5];

console.log(arr.map(a => a % 2 == 0));
// arr.forEach((a => console.log(a)));
// console.log(arr.filter(a => a == 3));
// console.log(arr.reduce((a, b) => a + b, 0));