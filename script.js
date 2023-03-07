
const Options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return Options[randomChoice];
}

console.log(getComputerChoice());