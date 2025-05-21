function getComputerChoice(computerChoice){
    const choices = ['rock', 'paper', 'scissors']
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getHumanChoice(humanChoice){
    
    const choices = ['rock', 'paper', 'scissors']
    humanChoice = prompt("Rock, paper, scissors?: ").toLowerCase();

    return humanChoice;
}

function playRound(computerChoice, humanChoice){
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()
    console.log("Computer: "+ computerChoice);
    console.log("Player: " + humanChoice);

    switch (humanChoice){
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



}

function playGame(humanScore, computerScore){

    for (let i = 0; i < 5; i++){
        playRound();
    }

    if (humanScore < computerScore){
        console.log("You lose.");
        console.log("Final score:\n Player score: " + humanScore + "\n" + "Computer score: " + computerScore);
        return;
    }

    else if (humanScore > computerScore){
        console.log("You win!");
        console.log("Final score:\n Player score: " + humanScore + "\n" + "Computer score: " + computerScore);
        return;
    }


}

let humanScore = 0;
let computerScore = 0;

playGame(humanScore, computerScore);





