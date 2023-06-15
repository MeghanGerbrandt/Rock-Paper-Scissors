/*
function getComputerChoice() 
    if computers turn to play
    output random 'rock' or 'paper' or 'scissors'
    otherwise, players turn

function playRound() 
    prompt user for playerSelection between: Rock, Paper, Scissors
    provide computerSelection of random array of Rock or Paper or Scissors
    if player and computer tie, output tie message
    else if player wins, output winning message
    else if player loses, output losing message
    if player input != rock/paper/scissors, print message to input valid choice
    
function game()
    place playRound function inside of game() function
    loop through playRound() function 5 times in a row
    if player wins, add a point for the player
    if computer wins, add a point for the computer
    after 5 rounds, tally up winner and output as either player or computer

function resetGame() 
    not specified in assignment, but will add function to reset the game after 5 rounds 
    and winner chosen, and reset score to 0

*/

const computerChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerWin = 0;
let computerWin = 0;
validChoice = 0;

//const playerSelection = prompt("Choose either Rock, Paper, or Scissors").toLowerCase();
//const computerSelection = getComputerChoice();


//console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Tie, you both chose ${playerSelection}!`;
    } else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            return `You Win, ${playerSelection} beats ${computerSelection}!`;
    } else if 
        (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection ==="scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
            return `You Lose, ${computerSelection} beats ${playerSelection}!`;  
    } else if 
        (playerSelection !== "rock" || "paper" || "scissors")  {        
        validChoice--;
        return "Please select a valid choice.";
        }  
}
function game() {
    for(validChoice = 0; validChoice < 5; validChoice++) {
       const playerSelection = prompt("Choose either Rock, Paper, or Scissors").toLowerCase();
       const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
    }
}
game();






