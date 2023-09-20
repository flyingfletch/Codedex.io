// Create a currency converter
let cn = 560; // Chinese yuan
let jp = 2455; // Japanese yen
let kr = 3280; // South Korean won

console.log("What do you have left in yuan? " + cn);
console.log("What do you have left in yen? " + jp);
console.log("What do you have left in won? " + kr);
console.log("");

let dollars = (cn * .14) + (jp * .0068) + (kr * .00075);

console.log("You have $" + dollars + " U.S. dollars.")