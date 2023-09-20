// bmi is dumb, but lets calculate it for the sake of practice
let weightPounds = 220;
let weightKilos = weightPounds * .45359237;
let mass = weightKilos;

let heightInches = 63;
let heightMeters = heightInches * .0254;
let height = heightMeters;

let bmi = mass/(height**2);

console.log("Your bmi is " + bmi);

if (bmi <= 18.4) {
    console.log("BMI says you're Underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("BMI says you're Normal.");
} else if (bmi >= 25.0 && bmi <= 39.9) {
    console.log("BMI says you're Overweight.");
} else {
    console.log("BMI says you're Obese.");
}