// bmi is dumb, but lets calculate it for the sake of practice
let weightPounds = 220;
let weightKilos = weightPounds * .45359237;
let mass = weightKilos;

let heightInches = 63;
let heightMeters = heightInches * .0254;
let height = heightMeters;

let bmi = mass/(height**2);

console.log("Your bmi is " + bmi);