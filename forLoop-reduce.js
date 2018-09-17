let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// TRADITIONAL
let sum1 = arr.reduce((acc, value) => {
    return acc + value;
}, sum);

// E6
let sum2 = arr.reduce((acc, value) =>
    acc + value, sum);


console.log(sum1);

console.log(sum2);