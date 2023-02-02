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
        console.log("You tied!");
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats rock.");
        return -1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats scissors.");
        return 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats rock.");
        return 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beat paper.");
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats scissors.");
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beat paper.");
        return 1;
    } else {
        console.log("That wasn't one of the options...");
        return 0;
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice ();

function game(){
    let score = 0
    for (let i = 0; i < 5; i++) {
        score += playRound(window.prompt(),getComputerChoice());
    }

    if (score > 0) {
        console.log (`Your final score is ${score}. Congrats! You won the game :)`);
    } else if (score < 0) {
        console.log (`Your final score is ${score}. You lost the game... Better luck next time :(`);
    } else if (score === 0) {
        console.log(`Your final score is ${score}. You tied the game! Some luck, huh?`);
    }
}


