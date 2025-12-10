// What is Loops in JavaScript?
// Loops are used to execute a block of code
// repeatedly until a specified condition is met.
// JavaScript supports different types of loops: for, while, do...while, and for...in loops.

// Example of for loop:
// for (let i = 0; i < 5; i++) {
//   console.log("Iteration number: " + i);
// }

// // Example of while loop:
// let j = 0;
// while (j < 5) {
//   console.log("While loop iteration: " + j);
//   j++;
// }

// // Example of do...while loop:
// let k = 0;
// do {
//   console.log("Do...while loop iteration: " + k);
//   k++;
// } while (k < 5);

// // Example of for...in loop:
// let person = { firstName: "John", lastName: "Doe", age: 30 };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// What are Strings in JavaScript?
// Strings are used to represent text in JavaScript.
// They are a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

// console.log(str.slice(1, 3)); // "el"

// 🔧 Syntax of Split
// In JavaScript, split() is basically your string-cutter tool.
// It takes a string and chops it into smaller pieces based on whatever separator you give it — like a space, comma, dash, etc.
// Then it returns an array of those pieces.
// string.split(separator, limit);

// separator → the thing you tell JS to cut by (like " ", ",", "-", etc.)

// limit (optional) → how many pieces you want
// console.log(str.split("", 5)); // [ 'H', 'e', 'l', 'l', 'o' ]

let str = "Hello, World!";
// Other String Methods Examples:
// console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
// console.log(str.charAt(5)); // index starts from 0, so charAt(5) returns ","
// console.log(str); // "Hello, World!"
// console.log(str.length); // 13
// console.log(str.toUpperCase()); // "HELLO, WORLD!"
// console.log(str.toLowerCase()); // "hello, world!"
// console.log(str.concat(" Welcome to JavaScript.")); // "Hello, World! Welcome to JavaScript."
// console.log(str.indexOf("o")); // 4
// console.log(str.lastIndexOf("o")); // 8
// console.log(str.includes("World")); // true
// console.log(str.startsWith("Hello")); // true
// console.log(str.endsWith("!")); // true
// console.log(str.trim()); // "Hello, World!"
// console.log(str.repeat(2)); // "Hello, World!Hello, World!"
