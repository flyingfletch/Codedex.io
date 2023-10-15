// Let's create a program that converts an integer into its equivalent binary numbers
let myNumber = 55;
let binary = "";

for (i = myNumber; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 == 0) {
        binary = "0" + binary;
    } else {
        binary = "1" + binary;
    }
}
console.log (binary);