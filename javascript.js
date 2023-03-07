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


let roundResult = document.querySelector('.round-result');
roundResult.textContent = `Hello! Welcome to Rock, Paper, Scissors!`;

let humanScore = 0;
let computerScore = 0;

let gameScore = document.querySelector('#game-score');




function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (humanScore === 5){
        gameScore.textContent = `Humans triumph over the machines. Final score: ${humanScore} to ${computerScore};`
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameScore.textContent = `The computers have triumphed over the humans. Final score: ${humanScore} to ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (playerSelection === computerSelection) {
        roundResult.textContent = "You tied!";
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        roundResult.textContent = "You lose! Paper beats rock.";
        computerScore++;            
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundResult.textContent = "You win! Rock beats scissors.";
        humanScore++;
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult.textContent = "You win! Paper beats rock.";
        humanScore++;
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        roundResult.textContent = "You lose! Scissors beat paper.";
        computerScore++; 
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResult.textContent = "You lose! Rock beats scissors.";
        computerScore++; 
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResult.textContent = "You win! Scissors beat paper.";
        humanScore++;
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;
    } else {
        roundResult.textContent = "That wasn't one of the options...";
        gameScore.textContent = `The current score is ${humanScore} to ${computerScore}.`;

    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice ();



const rockButton = document.querySelector('.rock-button');
rockButton.addEventListener('click',()=>{
        playRound ("rock",getComputerChoice())
    }
);

const paperButton = document.querySelector('.paper-button');
paperButton.addEventListener('click',()=>{
    playRound ("paper",getComputerChoice())
    }
);

const scissorsButton = document.querySelector('.scissors-button');
scissorsButton.addEventListener('click',()=>{
    playRound ("scissors",getComputerChoice())
    }
);

/* function game(){
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
} */


