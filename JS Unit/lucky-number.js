// Let the computer guess your lucky number!
const luckyNumber = 6;

let guess = Math.floor(Math.random() * 10) + 1;

while (guess != luckyNumber) {
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}

console.log("Yes, my lucky number is " + luckyNumber + "!");