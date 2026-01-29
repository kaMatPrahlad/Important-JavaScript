let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
  // Rock, Paper, Scissors
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const drawGame = () => {
  console.log("Game was Draw.");
};
const showWinner = () => {
  console.log("User Wins.");
};
const playGame = (userId) => {
  console.log("User choice", userId);

  //Generate computer choice- rock, paper, scissors
  const compChoice = genComputerChoice();
  console.log("Computer choice", compChoice);

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
      showWinner();
    } else {
      console.log("Computer Wins.");
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

// let userScore = document.getElementById("#user-score");
// let compScore = document.getElementById("#comp-score");
