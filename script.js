
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const Options = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return Options[randomChoice];
}


function playARound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "a draw";
    }
    else if ((playerSelection == ROCK && computerSelection == PAPER) || (playerSelection == PAPER && computerSelection == SCISSORS) ||
    (playerSelection == SCISSORS && computerSelection == ROCK)) {
        return "you loose";
    }
    else {
        return "you win";
    }
}
