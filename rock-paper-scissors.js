const computerChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resetButton = document.getElementById("resetButton");
const  yourScore = document.getElementById("yourScore");
const compScore = document.getElementById("compScore");

const results = document.querySelector(".results");
const score = document.querySelector(".score");

const p = document.createElement("p");

function getComputerChoice() {
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      //  const p = document.createElement("p");
        p.classList.add("result");
        p.innerText = `It's a Tie, you both chose ${playerSelection}!`;
        results.appendChild(p);     
    } else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
          //  const p = document.createElement("p");
            p.classList.add("result");
            p.innerText = `You Win, ${playerSelection} beats ${computerSelection}!`;
            results.appendChild(p);             
    } else if 
        (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection ==="scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
         //   const p = document.createElement("p");
            p.classList.add("result");
            p.innerText = `You Lose, ${computerSelection} beats ${playerSelection}!`; 
            results.appendChild(p);     
    } 
}

function getScore(yourScore, compScore) {
    const p = document.createElement("p");
    p.classList.add("score");
    yourScore.innerText = `Your Score: ${playerScore}`;
    compScore.innerText = `Computer Score: ${computerScore}`;
    score.appendChild(p);
}

function getWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        gameOver = true;
        const p = document.createElement("p");
        p.innerText = `Congrats, you are the Winner!`;
        resetButton.innerHTML = `<button onclick="newGame()">Play Again</button>`
        results.appendChild(p);
        rockButton.setAttribute("disabled", 1);
        paperButton.setAttribute("disabled", 1);
        scissorsButton.setAttribute("disabled", 1);
    } else if (computerScore === 5) {
        gameOver = true;
            const p = document.createElement("p");
            p.innerText = `You lost, better luck next time.`;
            resetButton.innerHTML = '<button onclick="newGame()">Play Again</button>';
            results.appendChild(p);
            rockButton.setAttribute("disabled", 1);
            paperButton.setAttribute("disabled", 1);
            scissorsButton.setAttribute("disabled", 1);
        }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    yourScore.innerText = `Your Score: ${playerScore}`;
    compScore.innerText = `Computer Score: ${computerScore}`;
    results.innerText = ``;
    resetButton.innerText = ``;
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
}

function clearContent() {
   p.innerText = ``;
}

resetButton.addEventListener("click", function () {
    gameOver = false;
    playerScore = 0;
    computerScore = 0; 
    
});
rockButton.addEventListener("click", function () {
    if (!gameOver) {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    getScore(yourScore, compScore);
    getWinner(playerScore, computerScore); 
    }
});
paperButton.addEventListener("click", function() {
    if (!gameOver) {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    getScore(yourScore, compScore);
    getWinner(playerScore, computerScore);
    }
});
scissorsButton.addEventListener("click", function() {
    if (!gameOver) {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    getScore(yourScore, compScore);
    getWinner(playerScore, computerScore);
    }
});










