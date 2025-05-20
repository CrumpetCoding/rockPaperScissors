function getComputerChoice(computerChoice){
    var choices = ['rock', 'paper', 'scissors']
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getHumanChoice(humanChoice){
    humanChoice = prompt("Rock, paper, scissors?: ")
    return humanChoice;
}

function playRound(computerChoice, humanChoice){
    computerSelection = getComputerChoice()
    humanSelection = getHumanChoice()
    console.log("Computer: "+ computerChoice);
    console.log("Player: " + humanChoice);


}

let humanScore = 0;
let computerScore = 0;

playRound();



