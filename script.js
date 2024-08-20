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

function getHumanChoice() {
    return prompt("rock, paper, scissors", "")
}


function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   let insensitiveHumanChoice = humanChoice.toLowerCase();
   let trimInsensitiveHumanChoice = insensitiveHumanChoice.trim();
    if (trimInsensitiveHumanChoice === computerChoice) {
        return "It's a Tie!"
    } else if (computerChoice === "rock"){
        switch (trimInsensitiveHumanChoice) {
            case "scissors":
                ++computerScore;
                return `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                break;
            case "paper":
                ++humanScore;
                return `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                break;
            default:
                return "that's not one of the options";
        }
    } else if (computerChoice === "paper"){
        switch (trimInsensitiveHumanChoice) {
            case "rock":
                ++computerScore;
                return `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                break;
            case "scissors":
                ++humanScore;
                return `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                break;
            default:
                return "that's not one of the options";
        }
    } else if (computerChoice === "scissors"){
        switch (trimInsensitiveHumanChoice) {
            case "paper":
                ++computerScore;
                return `You lose! ${computerChoice} beats ${trimInsensitiveHumanChoice}`;
                break;
            case "rock":
                ++humanScore;
                return `You win! ${trimInsensitiveHumanChoice} beats ${computerChoice}`;
                break;
            default:
                return "that's not one of the options";
        }
    } else {
        return "that's not one of the options"
    }
}
let n;
for (let i = 0; i === (+rounds); ++i) {
    playRound(getHumanChoice(), getComputerChoice);
    console.log(humanScore);
    console.log(computerScore);
    ++n;
}
if ((n === (+rounds)) && (humanScore > computerScore)) {
    console.log(`You won this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`);
    return "Win"
} else if ((n === (+rounds)) && (humanScore < computerScore)) {
    console.log(`You lost this game of Rock Paper Scissors against the computer with a score of ${humanScore + " to " + computerScore}!`);
    return "Loss"
} 
}

console.log(playGame(5));