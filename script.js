let playerScore = 0;
const playerScoreh3 = document.querySelector("#playerSelection h3");
let computerScore = 0;
const computerScoreh3 = document.querySelector("#computerSelection h3");
let roundNum = 0;
let computerChoiceArr = ["rock", "paper", "scissors"];
const roundLogo = document.querySelector("#middleLine h1");
const logo = document.getElementById("logo");
const startButt = document.getElementById("startButt");
const mainContainer = document.querySelector("#mainContainer");
const playerRock = document.querySelector("#pRock");
const playerPaper = document.querySelector("#pPaper");
const playerScissors = document.querySelector("#pScissors");
const playerSectionh2 = document.querySelector("#playerSelection h2");
const playerSectionSpan = document.querySelector("#playerSelection h2 span");
const computerRock = document.querySelector("#cRock");
const computerPaper = document.querySelector("#cPaper");
const computerScissors = document.querySelector("#cScissors");
const computerSectionh2 = document.querySelector("#computerSelection h2");
const computerSectionSpan = document.querySelector(
  "#computerSelection h2 span"
);

let start = startButt.addEventListener("click", () => {
  //mainContainer style
  startButt.disabled = true;
  mainContainer.style.opacity = "100%";
  mainContainer.style.rotate = "0deg";
  mainContainer.style.transform = "translateY(0px)";
  logo.style.display = "none";
  roundLogo.style.display = "block";
});

function game(playerChoice) {
  // let roundReturn;
  // for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
  //   roundReturn = playRound(roundNumber);
  //   if (roundReturn === "player") {
  //     playerScore += 1;
  //     console.log(`Player score is ${playerScore}`);
  //     console.log(`Computer score is ${computerScore}`);
  //   } else if (roundReturn === "computer") {
  //     computerScore += 1;
  //     console.log(`Player score is ${playerScore}`);
  //     console.log(`Computer score is ${computerScore}`);
  //   }
  // }
  // if (playerScore === computerScore) {
  //   console.log("The game ends in a draw!");
  //   playerScore = 0;
  //   computerScore = 0;
  // } else if (playerScore > computerScore) {
  //   console.log("Player wins the game!");
  //   playerScore = 0;
  //   computerScore = 0;
  // } else {
  //   console.log("Computer wins the game!");
  //   playerScore = 0;
  //   computerScore = 0;
  // }
}

let computerSelection = () => {
  let computerChoice = computerChoiceArr[Math.floor(Math.random() * 3)];

  computerSectionh2.innerHTML = "Computer selected";
  computerSectionSpan.innerHTML = `${computerChoice.charAt(0).toUpperCase()}`;
  console.log(computerChoice);
  if (computerChoice === "rock") {
    computerPaper.classList.add("disappear");
    computerScissors.classList.add("disappear");
    return "rock";
  } else if (computerChoice === "paper") {
    computerRock.classList.add("disappear");
    computerScissors.classList.add("disappear");
    return "paper";
  } else if (computerChoice === "scissors") {
    computerRock.classList.add("disappear");
    computerPaper.classList.add("disappear");
    return "scissors";
  }
};

function playRound(playerChoice) {
  let computerChoice = computerSelection();
  let winCases = new Map([
    ["paper", "rock"],
    ["scissors", "paper"],
    ["rock", "scissors"],
  ]);

  if (playerChoice === computerChoice) {
    //draw
    roundLogo.innerHTML = "It's a draw!";
  } else if (winCases.get(playerChoice) === computerChoice) {
    //player wins
    roundLogo.innerHTML = "Player wins!";
    playerScore += 1;
    playerScoreh3.innerHTML = `Score: ${playerScore}`;
  } else {
    //computer wins
    roundLogo.innerHTML = "Computer wins!";
    computerScore += 1;
    computerScoreh3.innerHTML = `Score: ${computerScore}`;
  }
}

playerRock.addEventListener("click", () => {
  playerPaper.classList.add("disappear");
  playerScissors.classList.add("disappear");
  playRound("rock");
});

playerPaper.addEventListener("click", () => {
  playerRock.classList.add("disappear");
  playerScissors.classList.add("disappear");
  playRound("paper");
});

playerScissors.addEventListener("click", () => {
  playerPaper.classList.add("disappear");
  playerRock.classList.add("disappear");
  playRound("scissors");
});
