function getComputerChoice(computerChoice){
    var choices = ['rock', 'paper', 'scissors']
    computerChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[computerChoice])
    return choices[computerChoice];
}

function getHumanChoice(humanChoice){
    let choice = prompt("Rock, paper, scissors?: ")
    console.log(choice);
}

//getHumanChoice()//
//getComputerChoice()//




