// What is DOM (Documnet onjkect Model Model) in JavaScript?

// 👉 The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// 👉 The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

// Example 1)

const h2 = document.querySelector("h2");
console.log(h2.innerText); // Hello Javascript!

h2.innerText = h2.innerText + "Hello DOM!";
// console.log(h2.innerText); // Hello DOM!

// Example 2)

const divs = document.querySelectorAll("div");
// Accessing individual div elements
// console.log(divs[2]); // NodeList(3) [div, div, div]
// <div>Modified Second div</div>
divs[1].innerText = "Modified Second div";
// console.log(divs[1]);
