// let's practice more if/else statements with air-quality-index
let aqi = 46;

if (aqi >= 0 && aqi <= 50) {
    console.log("Your aqi is Good.");
} else if (aqi >= 51 && aqi <= 100) {
    console.log("Your aqi is Moderate.");
} else if (aqi >= 101 && aqi <= 150) {
    console.log("Your aqi is Unhealthy. (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
    console.log("Your aqi is Unhealthy.");
} else if (aqi >= 201 && aqi <= 300) {
    console.log("Your aqi is Very Unhealthy.");
} else {
    console.log("Your aqi is Hazardous.");
}