function getComputerChoice (){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    if (computerChoice === 1) {
        return computerChoice = "Rock";
        } else if (computerChoice === 2) {
        return computerChoice = "Paper";
        } else if (computerChoice ===3) {
        return computerChoice = "Scissors";
        }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return roundResult = "You tied!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return roundResult = "You lose! Paper beats rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return roundResult = "You win! Paper beats rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return roundResult = "You lose! Scissors beat paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return roundResult = "You lose! Rock beats scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return roundResult = "You win! Scissors beat paper.";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice ();


