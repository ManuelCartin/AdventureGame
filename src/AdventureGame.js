/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

const readline = require("readline-sync");

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");


let playerName = "";

// Get player name using readline-sync
playerName = readline.question("What is your name, adventurer? ");

let inventory = [];
// Create variables for player stats
let health = 100;
let gold = 0;

// Display welcome message and starting stats
console.log(`Welcome, ${playerName}! Your journey begins now.`);
