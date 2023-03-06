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


let result = document.querySelector('.result');
result.textContent = `Hello! Welcome to Rock, Paper, Scissors!`;

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        result.textContent = "You tied!";
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result.textContent = "You lose! Paper beats rock.";
        return -1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result.textContent = "You win! Rock beats scissors.";
        return 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result.textContent = "You win! Paper beats rock.";
        return 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result.textContent = "You lose! Scissors beat paper.";
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result.textContent = "You lose! Rock beats scissors.";
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result.textContent = "You win! Scissors beat paper.";
        return 1;
    } else {
        result.textContent = "That wasn't one of the options...";
        return 0;
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


