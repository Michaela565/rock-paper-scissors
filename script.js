
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const Options = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return Options[randomChoice];
}


function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection == computerSelection) {
        return "a draw";
    }
    else if ((lowerPlayerSelection == ROCK && computerSelection == PAPER) || (lowerPlayerSelection == PAPER && computerSelection == SCISSORS) ||
    (lowerPlayerSelection == SCISSORS && computerSelection == ROCK)) {
        return "you loose";
    }
    else {
        return "you win";
    }
}
