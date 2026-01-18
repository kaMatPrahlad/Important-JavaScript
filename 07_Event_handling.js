let btn = document.querySelector("#btn");

btn.onclick = () => {
  console.log("Button clicked!");
  let a = 10;
  a++;
  console.log(a);
};

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//   console.log(e);
//   //   console.log(e.type);
//   //   console.log(e.target);
//   //   console.log(e.clientX, e.clientY);
// };

// Let‘s Practice

// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again.
// Ans=>

let toggleBtn = document.querySelector("#mode");
let currentMode = "light";

toggleBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    document.body.style.backgroundColor = "black";
  } else {
    currentMode = "light";
    document.body.style.backgroundColor = "white";
  }
  console.log("Current Mode:", currentMode);
});
