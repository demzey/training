const randomArray = [];
let random = (num) => {
    for (let i = 0; i < num; i++) {
        let randomizer = Math.floor(Math.random() * num);
        randomArray.push(`Number ${randomizer}`);
    }
}
random(5);

console.log(randomArray);