function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= (1/3)) {
        return "rock"
    } else if (randomNumber <= (2/3)) {
        return "paper"
    } else {
        return "scissors"
    }
}
const display = document.querySelector(".display");
const score = document.querySelector(".score")

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


    let condition = true;
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;

function playGame(rounds) {
function playRound(humanChoice, computerChoice) {
    condition = false;
   let insensitiveHumanChoice = humanChoice.toLowerCase();
   let trimInsensitiveHumanChoice = insensitiveHumanChoice.trim();
    if (trimInsensitiveHumanChoice === computerChoice) {
        display.textContent =  "It's a Tie!"
        return;
    } else if (computerChoice === "rock"){
        switch (trimInsensitiveHumanChoice) {
            case "scissors":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                return;
                break;
            case "paper":
                ++humanScore;
                display.textContent =  `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                return;
                break;
            default:
                display.textContent =  "that's not one of the options try again";
                return;
        }
    } else if (computerChoice === "paper"){
        switch (trimInsensitiveHumanChoice) {
            case "rock":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                return;
                break;
            case "scissors":
                ++humanScore;
                display.textContent =  `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                return;
                break;
            default:
                display.textContent =  "that's not one of the options try again";
                return;
        }
    } else if (computerChoice === "scissors"){
        switch (trimInsensitiveHumanChoice) {
            case "paper":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                return;
                break;
            case "rock":
                ++humanScore;
                display.textContent =  `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                return;
                break;
            default:
                display.textContent = "that's not one of the options try again";
                return;
        }
    } else {
        display.textContent =  "error computerChoice"
        return;
    }
}
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));


     score.textContent = `Your Score: ${humanScore} | The Computer's Score: ${computerScore}`

if (rounds === humanScore + computerScore) {
if (humanScore > computerScore) {
    display.textContent = `You won this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`;
    return "Win"
} else if (humanScore < computerScore) {
    display.textContent = `You lost this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`;
    return "Loss"
}
} 
}

playGame(prompt("How many rounds do you want to play, ideally an uneven Number", 5));