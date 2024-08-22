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
const setRounds = document.querySelector("#rounds")

let rounds = 5;
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        display.textContent =  "It's a Tie!"
        
    } else if (computerChoice === "rock"){
        switch (humanChoice) {
            case "scissors":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${humanChoice}`;
                
                break;
            case "paper":
                ++humanScore;
                display.textContent =  `You win! ${humanChoice} beats ${computerChoice}`;
                
                break;
            default:
                display.textContent =  "that's not one of the options try again";
                
        }
    } else if (computerChoice === "paper"){
        switch (humanChoice) {
            case "rock":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${humanChoice}`;
                
                break;
            case "scissors":
                ++humanScore;
                display.textContent =  `You win! ${humanChoice} beats ${computerChoice}`;
                
                break;
            default:
                display.textContent =  "that's not one of the options try again";
                
        }
    } else if (computerChoice === "scissors"){
        switch (humanChoice) {
            case "paper":
                ++computerScore;
                display.textContent =  `You lose! ${computerChoice} beats ${humanChoice}`;
                
                break;
            case "rock":
                ++humanScore;
                display.textContent =  `You win! ${humanChoice} beats ${computerChoice}`;
                
                break;
            default:
                display.textContent = "that's not one of the options try again";
                
        }
    } else {
        display.textContent =  "error computerChoice"
        
    }
    if (rounds === humanScore + computerScore) {
        if (humanScore > computerScore) {
            display.textContent = `You won this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`;
            humanScore = 0;
            computerScore = 0;
            return "Win";
        } else if (humanScore < computerScore) {
            display.textContent = `You lost this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`;
            humanScore = 0;
            computerScore = 0;
            return "Loss";
        }
        } 
        return;
}
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        score.textContent = `Your Score: ${humanScore} | The Computer's Score: ${computerScore}`
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        score.textContent = `Your Score: ${humanScore} | The Computer's Score: ${computerScore}`
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        score.textContent = `Your Score: ${humanScore} | The Computer's Score: ${computerScore}`
    });

    setRounds.addEventListener("click", () => rounds = Number(prompt("How many rounds should be in one game? Ideally an uneven Number", 5)))

