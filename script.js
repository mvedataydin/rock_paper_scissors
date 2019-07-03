// global variables
let n ;                  // n will be used when user enter input for round number
let computerScore = 0;
let playerScore = 0;
let actions = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
      
game();


function game() {
  getRound();
  for(i = 0 ; i<n; i++){
  playerPlay();
  computerPlay();
  calcScore();
  resultFinal();  
  }       
}

// get player's choice
function playerPlay() {
  return playerSelection = prompt("Pick your move: Rock, Paper or Scissors! ");
}

// get computer's choice
function computerPlay() {
  return computerSelection = actions[Math.floor(Math.random() * actions.length)];
}
            
// get round number player wants to play
function getRound() {
  let roundNumber = prompt("Enter the number of rounds you want to play! ");
  if (isNaN(roundNumber)) {
    alert(roundNumber + " is not a number"); window.location.reload(false);}
  else {
    n = roundNumber;
    alert("Game is starting! You must open developer console in order to play!")
  }
}

// calculate score
function calcScore() {
  let result = playRound(playerSelection, computerSelection);
  if (result === "win") {
    playerScore++;
    console.log("YOU: "+ playerScore + " COMPUTER: " + computerScore);
  }
  if (result === "lose") {
    computerScore++;
    console.log("YOU: "+ playerScore + " COMPUTER: " + computerScore);
  }
  if (result === "even") {
    console.log("YOU: "+ playerScore + " COMPUTER: " + computerScore);
  }
}

// display final result of the game
function resultFinal() {
    if (i === (n-1)) {
    if (playerScore > computerScore){
      alert("FINAL WINNER IS YOU!!")
    }
    if (playerScore < computerScore){
      alert("FINAL WINNER IS COMPUTER!")
    }
    if (playerScore === computerScore){
      alert("THE GAME IS EVEN!")
    }
   }
  }
    
 // check winner of round   
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
        //player wins case
  if ((playerSelection === "rock" && computerSelection ==="scissors") || (playerSelection === "paper" && computerSelection ==="rock") || (playerSelection === "scissors" && computerSelection ==="paper")) {
    console.log("You win. " + playerSelection + " beats " + computerSelection + "! ")
    return 'win';
  }
        //computer wins case
  if((playerSelection === "scissors" && computerSelection ==="rock") || (playerSelection === "rock" && computerSelection ==="paper") || (playerSelection === "paper" && computerSelection ==="scissors")) {
    console.log("You lose. " + computerSelection + " beats " + playerSelection + "! ")
    return  'lose';
  }
        //even case
  if((playerSelection === "scissors" && computerSelection ==="scissors") || (playerSelection === "rock" && computerSelection ==="rock") || (playerSelection === "paper" && computerSelection ==="paper"))  {
    console.log("You both choose "+ playerSelection + " . Round is even! ")
    return 'even';
  }
  else{
        //wrong input
    alert(playerSelection + " is wrong input, Try again!");
    i--; 
    return NaN;
  }
}
    
   
