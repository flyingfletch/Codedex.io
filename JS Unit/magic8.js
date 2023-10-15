// More practice of if/else statements with a magic 8 ball
let answer = Math.floor(Math.random() * 9);

if (answer == 1) {
    console.log("Yes - definitely.");
} else if (answer == 2) {
    console.log("It is decidedly so.");
} else if (answer == 3) {
    console.log("Without a doubt.");
} else if (answer == 4) {
    console.log("Reply hazy, try again.");
} else if (answer == 5) {
    console.log("Ask again later.");
} else if (answer == 6) {
    console.log("Better not tell you now.");
} else if (answer == 7) {
    console.log("My sources say no.");
} else if (answer == 8) {
    console.log("Outlook not so good.");
} else {
    console.log("Very doubtful.");
}