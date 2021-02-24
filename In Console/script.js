//Created global variables for player choice and attempts for helper functions to prompt for valid answer but not loop forever.
let playerSelection = "";
let maxAttempts = 0;
let computerSelection = ""; //Added computer selection to global scope due to validation helper function breaking singleRound Functionality.

//create a score total for each player
let playerScore = 0;
let computerScore = 0;

// Create a function named computerPlay that will randomly select the computers choice
function computerPlay() {
    //create an array of choices
    let choices = ["rock", "paper", "scissors"];
    //select string in array based on a random number (index)
    let selection = Math.floor(Math.random() * 3);
    //return the selected string
    return choices[selection];
}

//Create a helper function to check validation of user input
function playerInput() {
    if (maxAttempts == 3) {
        return;
    }

    playerSelection = prompt("Rock, Paper, or Scissors?");
    if (playerSelection === null || playerSelection === "") {
        maxAttempts++;
        playerInput();
        return;
    }

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        maxAttempts++
        playerInput();
        return;
    }

}

// Create a function named singleRound that accepts player input and then contests it with the computerPlay selection and declare the winner
// Rock > Scissors, Paper > Rock, Scissors > Paper
function singleRound() {
    playerInput();
    computerSelection = computerPlay();
    // test selection against computers
    //if not a tie
    if (playerSelection !== computerSelection) {
        //Player Wins Conditions
        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors!"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock!"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper!"
            //Player Loses Conditions
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock!"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper!"
        }
    } else {
        return "It's a Tie!"
    }
    // declare if player wins of loses
}

// Create a function that will play best of 5 and displays the winner based on number of rounds won.
function game() {
    if (maxAttempts < 3) {
        //reset the scores
        playerScore = 0;
        computerScore = 0;
        //run singleRound function until a player has 3 points
        for (var i = 0; i < 5; i++) {
            console.log(singleRound());
            //test which score is greater than the other and report results.
            if (playerScore === 3) {
                maxAttempts = 0;
                console.log(`YOU WON! ${playerScore} to ${computerScore}!`)
            } else if (computerScore === 3) {
                maxAttempts = 0;
                console.log(`YOU LOSE! ${playerScore} to ${computerScore}!`)
            }
        }
    } else {
        //attempt to reset the validation counter if it is full.  Only works if function is called again.
        maxAttempts = 0;
        return;
    }
}