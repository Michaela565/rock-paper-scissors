
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const Options = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return Options[randomChoice];
}


function lowercaseInput(userInput) {
    return userInput.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "A draw.";
    }
    else if ((playerSelection == ROCK && computerSelection == PAPER) || (playerSelection == PAPER && computerSelection == SCISSORS) ||
    (playerSelection == SCISSORS && computerSelection == ROCK)) {
        return "You loose!";
    }
    else {
        return "You win!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = lowercaseInput(prompt());
        let computerChoice = getComputerChoice();
        console.log("The computers choice is " + computerChoice);
        console.log(playRound(userInput, computerChoice));        
    }
}

game();