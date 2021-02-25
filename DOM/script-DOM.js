// create variables for points and selections
let playerSelection = "";
let computerSelection = "";
let results = "";
let computerScore = 0;
let playerScore = 0;

// select DOM elements
const buttons = document.querySelectorAll(`.player-input`);
const resultsDisplay = document.querySelector('.results');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.comp-score');
const declareWinner = document.querySelector('.declare-winner');
const resetButton = document.querySelector('.reset');


// function to select the player input based on the button value
function playerInput(e) {
    playerSelection = e.target.value
    return playerSelection = playerSelection.toLowerCase().slice(0, -1);
}

// Computer play function.
function computerPlay() {
    //create an array of choices
    let choices = ["rock", "paper", "scissors"];
    //select string in array based on a random number (index)
    let selection = Math.floor(Math.random() * 3);
    //return the selected string
    return computerSelection = choices[selection];
}

//helper function to reset the game after a winner is declared
function restart() {
    playerSelection = "";
    computerSelection = "";
    results = "";
    computerScore = 0;
    playerScore = 0;

    resultsDisplay.innerHTML = results;
    displayComputerScore.innerHTML = computerScore;
    displayPlayerScore.innerHTML = playerScore;

    declareWinner.innerHTML = ""
    resetButton.style.display = "none";
}

// Create a function named singleRound that accepts player input and then contests it with the computerPlay selection and declare the winner
// Rock > Scissors, Paper > Rock, Scissors > Paper
function singleRound(e) {
    playerInput(e);
    computerPlay();
    resultsDisplay.innerHTML = results;
    displayComputerScore.innerHTML = computerScore;
    displayPlayerScore.innerHTML = playerScore;
    // test if a player has reached 5 points
    if (playerScore === 5) {
        declareWinner.innerHTML = "You Win!"
        resetButton.style = "";
    } else if (computerScore === 5) {
        declareWinner.innerHTML = "You Have Been Terminated!"
        resetButton.style = "";
    } else {
        // test selection against computers
        //if not a tie
        if (playerSelection !== computerSelection) {
            //Player Wins Conditions
            if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return results = "You Win! Rock beats Scissors!"
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return results = "You Win! Paper beats Rock!"
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return results = "You Win! Scissors beats Paper!"
                //Player Loses Conditions
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                return results = "You Lose! Rock beats Scissors!"
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                return results = "You Lose! Paper beats Rock!"
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++;
                return results = "You Lose! Scissors beats Paper!"
            }
        } else {
            results = "It's a Tie!"
        }
    }
}


// Event listeners for each button to run the single round function.
buttons.forEach(btn => btn.addEventListener('click', singleRound))
resetButton.addEventListener('click', restart);