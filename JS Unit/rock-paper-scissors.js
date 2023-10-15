// Let's simulate a game of rock paper scissors
let playerChoice = "Scissors";
console.log("Player picked: " + playerChoice);

let randomNum = Math.floor(Math.random() * 4);

if (randomNum <=1) {
    console.log("Computer picked: Rock");
    computerChoice = "Rock";
} else if (randomNum >1  && randomNum <=2) {
    console.log("Computer picked: Paper");
    computerChoice = "Paper";
} else {
    console.log("Computer picked: Scissors");
    computerChoice = "Scissors";
}

if (playerChoice == "Rock" && computerChoice == "Scissors") {
    console.log("The player won! 🤩")
} else if (playerChoice == "Rock" && computerChoice == "Paper") {
    console.log("The computer won. 😭");
} else if (playerChoice == "Paper" && computerChoice == "Rock") {
    console.log("The player won! 🤩")
} else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    console.log("The computer won. 😭");
} else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    console.log("The player won! 🤩")
} else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    console.log("The computer won. 😭");
} else {
    console.log("It is a draw. 🤝");
}