function getComputerChoice(computerChoice){
    var choices = ['rock', 'paper', 'scissors']
    computerChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[computerChoice])
    return choices[computerChoice];
}

getComputerChoice();

