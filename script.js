let playerScore;
let computerScore;
let roundNum;

if (
  localStorage.getItem("playerScore") &&
  localStorage.getItem("computerScore") &&
  localStorage.getItem("roundNum")
) {
  playerScore = parseInt(localStorage.getItem("playerScore"));
  computerScore = parseInt(localStorage.getItem("computerScore"));
  roundNum = parseInt(localStorage.getItem("roundNum"));
} else {
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("computerScore", 0);
  localStorage.setItem("roundNum", 0);
}

const playerScoreh3 = document.querySelector("#playerSelection h3");
const computerScoreh3 = document.querySelector("#computerSelection h3");
let computerChoiceArr = ["rock", "paper", "scissors"];
const roundLogo = document.querySelector("#middleLine h1");
const logo = document.getElementById("logo");
const startButt = document.getElementById("startButt");
const mainContainer = document.querySelector("#mainContainer");
const playerRock = document.querySelector("#pRock");
const playerPaper = document.querySelector("#pPaper");
const playerScissors = document.querySelector("#pScissors");
const playerSectionh2 = document.querySelector("#playerSelection h2");
const computerRock = document.querySelector("#cRock");
const computerPaper = document.querySelector("#cPaper");
const computerScissors = document.querySelector("#cScissors");
const computerSectionh2 = document.querySelector("#computerSelection h2");

let start = startButt.addEventListener("click", () => {
  //mainContainer style
  startButt.disabled = true;
  startButt.style.pointerEvents = "none";
  startButt.style.background = "grey";
  mainContainer.style.opacity = "100%";
  mainContainer.style.rotate = "0deg";
  mainContainer.style.transform = "translateY(0px)";
  logo.style.display = "none";
  roundLogo.style.display = "block";
  roundLogo.innerHTML = `Round ${roundNum}`;
  playerScoreh3.innerHTML = `Score: ${playerScore}`;
  computerScoreh3.innerHTML = `Score: ${computerScore}`;
});

let computerSelection = () => {
  let computerChoice = computerChoiceArr[Math.floor(Math.random() * 3)];

  computerSectionh2.innerHTML = `Computer selected <span class="textGlow">${computerChoice}</span>!`;
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
  playerSectionh2.innerHTML = `PLayer selected <span class="textGlow">${playerChoice}</span>!`;
  let computerChoice = computerSelection();
  let winCases = new Map([
    ["paper", "rock"],
    ["scissors", "paper"],
    ["rock", "scissors"],
  ]);

  if (playerChoice === computerChoice) {
    //draw
    roundLogo.innerHTML = "It's a draw!";
    roundNum += 1;
    localStorage.setItem("roundNum", roundNum);
  } else if (winCases.get(playerChoice) === computerChoice) {
    //player wins
    roundLogo.innerHTML = "Player wins!";
    playerScore++;
    localStorage.setItem("playerScore", playerScore);
    roundNum++;
    localStorage.setItem("roundNum", roundNum);
    playerScoreh3.innerHTML = `Score: ${playerScore}`;
  } else {
    //computer wins
    roundLogo.innerHTML = "Computer wins!";
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    roundNum++;
    localStorage.setItem("roundNum", roundNum);
    computerScoreh3.innerHTML = `Score: ${computerScore}`;
  }
}

playerRock.addEventListener(
  "click",
  () => {
    playerPaper.classList.add("disappear");
    playerScissors.classList.add("disappear");
    playRound("rock");
  },
  { once: true }
);

playerPaper.addEventListener(
  "click",
  () => {
    playerRock.classList.add("disappear");
    playerScissors.classList.add("disappear");
    playRound("paper");
  },
  { once: true }
);

playerScissors.addEventListener(
  "click",
  () => {
    playerPaper.classList.add("disappear");
    playerRock.classList.add("disappear");
    playRound("scissors");
  },
  { once: true }
);
