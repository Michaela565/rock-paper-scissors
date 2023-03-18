
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const OPTIONS = [ROCK, PAPER, SCISSORS];

let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;

const textComputerScore = document.querySelector('.computer');
const textPlayerScore = document.querySelector('.player');
const textDrawsScore = document.querySelector('.draws');
const textWin = document.querySelector('.win');
const resetBtn = document.querySelector('.resetBtn');

let win = false;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return OPTIONS[randomChoice];
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


function countPoints(outcome) {
    if (outcome == 0) {
        computerScore ++;
        textComputerScore.textContent =`Computer score: ${computerScore}`;
        return;
        
    }
    else if (outcome == 1) {
        playerScore ++;
        textPlayerScore.textContent = `Player score: ${playerScore}`;
        return;
    }
    else {
        numberOfDraws ++;
        textDrawsScore.textContent = `Number of Draws: ${numberOfDraws}`;
        return;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    numberOfDraws = 0;
    textComputerScore.textContent = `Computer score: ${computerScore}`;
    textPlayerScore.textContent = `Player score: ${playerScore}`;
    textDrawsScore.textContent = `Number of Draws: ${numberOfDraws}`;
    textWin.textContent = "";
    win = false;
}

function isWin(){
    if (playerScore == 5){
        win = true;
        textWin.textContent = "Player wins!";
        
    }
    else if (computerScore == 5){
        win = true;
        textWin.textContent = "Computer wins!";
    }
}

function playWithInput(e) {
    let outcome;
    let computerChoice = getComputerChoice();
    if(win){
        resetGame();
    }
    else if(e.target.getAttribute("class") == SCISSORS){
        outcome = playRound(SCISSORS, computerChoice);
    }
    else if(e.target.getAttribute("class") == ROCK){
        outcome = playRound(ROCK, computerChoice);
    }
    else{
        outcome = playRound(PAPER, computerChoice);
    }
    countPoints(outcome);
    isWin();
}

function addBtnListeners() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', playWithInput));
    resetBtn.addEventListener('click', resetGame);
}


function game() {
    addBtnListeners()
}

game();