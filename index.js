playerDisplay = document.getElementById("playerDisplay");
computerDisplay = document.getElementById("computerDisplay");
resultDisplay = document.getElementById("resultDisplay");

let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

function play(playerSelection) {
    const computerSelection = computerPlay();
    let iconPlayer = turnToIcon(playerSelection);
    let iconComputer = turnToIcon(computerSelection);
    if (playerSelection === "rock") {
        icon = "👊";
    } else if (playerSelection === "paper") {
        icon = "🖐️";
    } else if (playerSelection === "scissors") {
        icon = "✌️";
    }
    if (playerSelection === computerSelection) {
        resultColor("Tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultColor("You win!");
        scorePlayer++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultColor("You win!");
        scorePlayer++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultColor("You win!");
        scorePlayer++;
    } else {
        resultColor("You lose!");
        scoreComputer++;
    }
    playerDisplay.textContent = `Player: ${iconPlayer} Score: ${scorePlayer}`;
    computerDisplay.textContent = `Computer: ${iconComputer} Score: ${scoreComputer}`;
}

function turnToIcon(playerSelection) {
    if (playerSelection === "rock") {
        return "👊";
    } else if (playerSelection === "paper") {
        return "🖐️";
    } else if (playerSelection === "scissors") {
        return "✌️";
    }
}

function resultColor(result){
    if (result === "You win!") {
        resultDisplay.style.color = "green";
        resultDisplay.textContent = result;
    } else if (result === "You lose!") {
        resultDisplay.style.color = "red";
        resultDisplay.textContent = result;
    } else {
        resultDisplay.style.color = "black";
        resultDisplay.textContent = result;
    }
}