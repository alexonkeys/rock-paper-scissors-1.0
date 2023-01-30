function getComputerChoice (){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    if (computerChoice === 1) {
        return computerChoice = "Rock";
        } else if (computerChoice === 2) {
        return computerChoice = "Paper";
        } else if (computerChoice ===3) {
        return computerChoice = "Scissors";
        }
    console.log (computerChoice);
}