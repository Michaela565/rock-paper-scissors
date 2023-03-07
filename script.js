
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const OPTIONS = [ROCK, PAPER, SCISSORS];
const OUTCOMES = ["You loose!", "You win!", "A draw."]

let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return OPTIONS[randomChoice];
}


function lowercaseInput(userInput) {
    return userInput.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 2;
    }
    else if ((playerSelection == ROCK && computerSelection == PAPER) || (playerSelection == PAPER && computerSelection == SCISSORS) ||
    (playerSelection == SCISSORS && computerSelection == ROCK)) {
        return 0;
    }
    else {
        return 1;
    }
}

function outcomeFromIntToStr(outcome) {
    return OUTCOMES[outcome];
}

function countPoints(outcome) {
    if (outcome == 0) {
        return computerScore ++;
    }
    else if (outcome == 1) {
        return playerScore ++;
    }
    else {
        return numberOfDraws ++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = lowercaseInput(prompt());
        let computerChoice = getComputerChoice();
        console.log("The computers choice is " + computerChoice);
        let outcome = playRound(userInput, computerChoice);
        countPoints(outcome);
        console.log(outcomeFromIntToStr(outcome));
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
        console.log("Draws: " + numberOfDraws);
    }
}

game();