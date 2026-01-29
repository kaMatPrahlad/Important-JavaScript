let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  // Rock, Paper, Scissors
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const drawGame = () => {
  //   console.log("Game was Draw.");
  msg.innerText = "It's a Draw, Play again!";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userId, compChoice) => {
  userScore++;
  userScorepara.innerText = userScore;

  msg.innerText = `User Wins! Your ${userId} beats ${compChoice}`;
  msg.style.backgroundColor = "green";
};
const playGame = (userId) => {
  console.log("User choice = ", userId);

  //Generate computer choice- rock, paper, scissors
  const compChoice = genComputerChoice();
  console.log("Computer choice = ", compChoice);

  // if user choice and computer choice are the same- it's a Draw
  if (userId === compChoice) {
    //   console.log("It's a Draw");
    drawGame();
  } else {
    // Check all win conditions for user
    if (
      (userId === "rock" && compChoice === "scissors") ||
      (userId === "paper" && compChoice === "rock") ||
      (userId === "scissors" && compChoice === "paper")
    ) {
      // User Wins
      showWinner(userId, compChoice);
    } else {
      // Computer Wins
      compScore++;
      compScorepara.innerText = compScore;
      msg.innerText = `Computer Wins! ${compChoice} beats your ${userId}`;
      msg.style.backgroundColor = "red";
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userId = choice.getAttribute("id");
    // Handle user choice
    playGame(userId);
  });
});
