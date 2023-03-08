
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const OPTIONS = [ROCK, PAPER, SCISSORS];
const OUTCOMES = ["You loose!", "You win!", "A draw."]

let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;

let win = false;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return OPTIONS[randomChoice];
}


function lowercaseInput(userInput) {
    return userInput.toLowerCase()
}

function checkIfValidInput(userInput){
    if(userInput == SCISSORS || userInput == ROCK || userInput == PAPER){
        return true;
    }
    else{
        return false;
    }
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

function printPoints() {
    console.log("Computer: " + computerScore);
    console.log("Player: " + playerScore);
    console.log("Draws: " + numberOfDraws);
}

function isWin(){
    if (playerScore == 5){
        win = true;
        console.log("You win the game!");
    }
    else if (computerScore == 5){
        win == true;
        console.log("Computer wins!")
    }
}

function game() {
    while (win == false) {
        let userInput = lowercaseInput(prompt());
        if (checkIfValidInput(userInput) == false) {
            while (checkIfValidInput(userInput) == false) {
                console.log("Incorrect value, re-enter a valid one.")
                userInput = lowercaseInput(prompt());
            }
        }
        let computerChoice = getComputerChoice();

        console.log("The computers choice is " + computerChoice);

        let outcome = playRound(userInput, computerChoice);
        countPoints(outcome);
        console.log(outcomeFromIntToStr(outcome));

        
        printPoints();
        isWin();
    }
    
}

game();