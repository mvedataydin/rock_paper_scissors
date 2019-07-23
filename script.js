// global variables
let computerScore = 0;
let playerScore = 0;
let actions = ["rock", "paper", "scissors"];
let round = 0;
let tie = 0;

var newDiv = document.createElement('div');
var container = document.getElementById('container');
container.appendChild(newDiv);


// get computer's choice
function computerPlay() {
  return computerSelection = actions[Math.floor(Math.random() * actions.length)];
}

function hideButtons(elementID){
  document.getElementById(elementID).style.visibility = "hidden";
}

// display final result of the game
function resultFinal() {
  if (playerScore === 5){
    console.log("FINAL WINNER IS YOU!!");
  }
  if (computerScore === 5){
    console.log("FINAL WINNER IS COMPUTER!");
  }
}

    
 // check winner of round   
function playRound(e) {
  const roundCount = document.querySelector("#roundCount");
  const playerWins = document.querySelector("#playerWins");
  const computerWins = document.querySelector("#computerWins");
  const tied = document.querySelector("#tied");
  const text = document.querySelector("#text");

  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  round++;
  roundCount.textContent = round;

        //player wins case
  if ((playerSelection === "rock" && computerSelection ==="scissors") || (playerSelection === "paper" && computerSelection ==="rock") || (playerSelection === "scissors" && computerSelection ==="paper")) {
    console.log("You win. " + playerSelection + " beats " + computerSelection + "! ")
    playerScore++;
    text.textContent = "Horray! "+playerSelection+" beats "+computerSelection+"!";
    playerWins.textContent = playerScore;
  }
        //computer wins case
  if((playerSelection === "scissors" && computerSelection ==="rock") || (playerSelection === "rock" && computerSelection ==="paper") || (playerSelection === "paper" && computerSelection ==="scissors")) {
    console.log("You lose. " + computerSelection + " beats " + playerSelection + "! ")
    computerScore++;
    text.textContent = "Oh no! "+computerSelection+" beats "+playerSelection+"!";
    computerWins.textContent = computerScore;
  }
        //even case
  if((playerSelection === "scissors" && computerSelection ==="scissors") || (playerSelection === "rock" && computerSelection ==="rock") || (playerSelection === "paper" && computerSelection ==="paper"))  {
    console.log("You both choose "+ playerSelection + " . Round is even! ")
    console.log("YOU: "+ playerScore + " COMPUTER: " + computerScore);
    tie++;
    text.textContent = "It's a tie!"
    tied.textContent = tie;
  }

  gameCheck();
}

function gameCheck(){
  if (playerScore === 5){
    text.textContent = "WELL DONE! FINAL WINNER IS YOU!";
    hideButtons("container");
  }
  if (computerScore === 5){
    text.textContent = "OH NO! FINAL WINNER IS COMPUTER!";
    hideButtons("container");
  }

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

function resetButton() {
  document.getElementById("results").reset();
}

