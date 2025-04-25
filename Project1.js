const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log("Hello", name, "Welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ").trim().toLowerCase();
if (shouldWePlay === "yes") {
    const leftOrRight = prompt("You enter a maze. Do you want to go left or right? ").trim().toLowerCase();
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge.");
        const cross = prompt("Do you want to cross the bridge? ").trim().toLowerCase();
        if (cross === "yes" || cross === "y" || cross === "okay") {
            console.log("You cross, but the bridge was weak and broke. You fell. You lost...");
        } else {
            console.log("Good choice. You win!");
        }
    } else if (leftOrRight === "right") {
        console.log("You go right and fell off a cliff...");
    } else {
        console.log("Invalid direction. You’re lost in the maze.");
    }
} else if (shouldWePlay === "no") {
    console.log("Okay :(");
} else {
    console.log("Invalid input");
}
