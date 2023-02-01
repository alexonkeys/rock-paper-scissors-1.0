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
    if (playerSelection === computerSelection) {
        return "You tied!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beat paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat paper.";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice ();
const roundResult = playRound(playerSelection,computerSelection);




