//Create global variable for validation of player selection
let playerSelection = "";
let maxAttempts = 0; //Added attempt count to close prompts after 5 invalid entries

// Create a function named computerPlay that will randomly select the computers choice
function computerPlay() {
    //create an array of choices
    let choices = ["rock", "paper", "scissors"];
    //select string in array based on a random number (index)
    let selection = Math.floor(Math.random() * 3);
    //return the selected string
    return choices[selection];
}

//Create a helper function to validate the user's input
/* function playerInput() {
    //Prompt user for a selection
    playerSelection = prompt("Rock, Paper, or Scissors?");
    //Make sure it isn't null
    if(playerSelection == null || playerSelection === ""){}
    if (playerSelection === null || playerSelection === "") {
        //Update attempts check if greater than 5
        maxAttempts++;
        if (maxAttempts <= 5) {
            playerInput();
        }
        //Make sure input is valid
    } else if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection.toLowerCase();
        //return the choice
    } else {
        //Update attempts check if greater than 5
        maxAttempts++;
        if (maxAttempts <= 5) {
            playerInput();
        }
    }
} */

function playerInput() {

}


// Create a function named singleRound that accepts player input and then contests it with the computerPlay selection and declare the winner
// Rock > Scissors, Paper > Rock, Scissors > Paper
function singleRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    computerSelection = computerPlay();
    // test selection against computers
    //if not a tie
    if (playerSelection !== computerSelection) {
        //Player Wins Conditions
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors!"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats Rock!"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You Win! Scissors beats Paper!"
            //Player Loses Conditions
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You Lose! Rock beats Scissors!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock!"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper!"
        }
    } else {
        return "It's a Tie!"
    }
    // declare if player wins of loses
}

// Create a function that will play best of 5 and displays the winner based on number of rounds won.
function game() {
    //create a score total for each player
    //run singleRound function 5 times
    for (var i = 0; i <= 5; i++) {
        console.log(singleRound());
    }
    //test which score is greater than the other and report results.
}