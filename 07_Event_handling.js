let btn = document.querySelector("#btn");

btn.onclick = () => {
  console.log("Button clicked!");
  let a = 10;
  a++;
  console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};
