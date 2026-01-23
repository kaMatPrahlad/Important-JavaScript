let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");

let turnO = true;
// true = X; false = O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.removeAttribute("disabled");
  });
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked!");
    // box.innerText = "ABCD";
    if (turnO) {
      //Player O's turn
      box.innerText = "O";
      turnO = false;
    } else {
      //Player X's turn
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = "true";

    checkWin();
  });
});

// disable all boxes after win is found
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = "true";
  });
};
// Show winner message on screen
const showWinner = (winner) => {
  msg.innerText = `Winner is: ${winner}`;
  msgContainer.classList.remove("hide");
};

// Whole logic to check winning patterns
const checkWin = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // Get the values of the 3 boxes
    // Check if they are same, not empty, then we have a winner
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;
    /// Check if they are same and not empty
    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val == post2Val && post2Val == post3Val) {
        console.log("We have a winner: " + post1Val);
        showWinner(post1Val);
        disableBoxes();
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  resetGame();
});
