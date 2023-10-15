// Let's test the continue and break keywords for loops
for (i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
        continue; // Ends the current iteration if it is true and moves on to the next one
    }
    if (i == 42) {
        console.log(i);
        break; // Ends the loop before all of the iterations
    }
    console.log(i);
}