function getComputerChoice (){
    let computerSelection = Math.floor(Math.random()*3) + 1;
    if (computerSelection === 1) {
        return computerSelection = "Rock";
        } else if (computerSelection === 2) {
        return computerSelection = "Paper";
        } else if (computerSelection ===3) {
        return computerSelection = "Scissors";
        }
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
        console.log("You tied!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return -1;
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 1;
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
        console.log("You win! Paper beats rock.");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return -1;
        console.log("You lose! Scissors beat paper.");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return -1;
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
        console.log("You win! Scissors beat paper.");
    } else {
        return 0;
        console.log("That wasn't one of the options...");
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice ();
const roundResult = playRound(playerSelection,computerSelection);

function game(){
    let score = 0
    for (let i = 0; i < 5; i++) {
        score += playRound(window.prompt(),getComputerChoice());
    }
    console.log(score);

}


