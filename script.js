function getComputerChoice(){
    let computer_num = Math.floor(Math.random() * 3);
    let computerChoice = null;

    if (computer_num === 0){
        computerChoice = "rock";
    }
    else if (computer_num === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }

    console.log("Computer: " + computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    
    const choices = ['rock', 'paper', 'scissors']
    let humanChoice = prompt("Rock, paper, scissors?: ").toLowerCase();

    console.log("Player: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        case "rock":
            if (computerChoice === "rock")
            {
                console.log("It's a draw!");
            }
            else if (computerChoice === "paper")
            {
                computerScore++;
                console.log("You lose. Paper beats rock.");
            }
            else
            {
                humanScore++;
                console.log("You win! Rock beats scissors.");
            }
            break;

        case "paper":
            if (computerChoice === "rock")
            {
                humanScore++;
                console.log("You win! Paper beats rock.");
            }
            else if (computerChoice === "paper")
            {
                console.log("It's a draw!")
            }
            else
            {
                computerScore++;
                console.log("You lose. Scissors beat paper.");
            }
            break;
        
        case "scissors":
            {
            if (computerChoice === "rock")
            {
                computerScore++;
                console.log("You lose. Rock beats scissors.");
            }
            else if (computerChoice === "paper")
            {
                humanScore++;
                console.log("You win! Scissors beat paper.")
            }
            else
            {
                console.log("It's a draw!");
            }
            break;
            }
        default:
            console.log("ERROR Invalid input. Please try again.");
    }

    return humanScore, computerScore;

}

function playGame(){

    let counter = 0;

    while (counter < 5) {
        let human_selection = getHumanChoice();
        let computer_selection = getComputerChoice();
        playRound(human_selection, computer_selection);
        counter++;
    }

    if (computerScore > humanScore){
        console.log("GAME OVER!\n Your score: " + humanScore + "\n Computer score: " + computerScore);
    }
    else if (computerScore < humanScore){
        console.log("WINNER!\n Your score: " + humanScore + "\n Computer score: " + computerScore);
    }
    else{
            console.log("DRAW!\n Your score: " + humanScore + "\n Computer score: " + computerScore);
    }

    return;
}

let humanScore = 0;
let computerScore = 0;

playGame(humanScore, computerScore);





