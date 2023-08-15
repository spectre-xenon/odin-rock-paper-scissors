let playerScore = 0;
let computerScore = 0;
let computerChoiceArr = ["rock", "paper", "scissors"];

function game() {
  let roundReturn;
  for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    roundReturn = playRound(roundNumber);
    if (roundReturn === "player") {
      playerScore += 1;
      console.log(`Player score is ${playerScore}`);
      console.log(`Computer score is ${computerScore}`);
    } else if (roundReturn === "computer") {
      computerScore += 1;
      console.log(`Player score is ${playerScore}`);
      console.log(`Computer score is ${computerScore}`);
    }
  }

  if (playerScore >= 3) {
    console.log("Player wins the game!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 3) {
    console.log("Computer wins the game!");
    playerScore = 0;
    computerScore = 0;
  } else {
    console.log("The game ends in a draw!");
  }
}

function playRound(roundNumber) {
  playerChoice = prompt("please select rock paper or scissors");
  playerChoice = playerChoice.toLowerCase();
  let computerChoice = computerChoiceArr[Math.floor(Math.random() * 3)];

  let winCases = new Map([
    ["paper", "rock"],
    ["scissors", "paper"],
    ["rock", "scissors"],
  ]);

  if (playerChoice === computerChoice) {
    console.log("It's a draw");
    return "draw";
  } else if (winCases.get(playerChoice) === computerChoice) {
    console.log(`Player wins round ${roundNumber}`);
    return "player";
  } else {
    console.log(`Computer wins round ${roundNumber}`);
    return "computer";
  }
}
