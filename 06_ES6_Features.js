//💥 Mind-Blowing ES6 JavaScript Techniques Every Coder Should Know

// 1)  let and const Are ES6
// 2)  Arrow Functions
// 3)  Template Literals
// 4)  Default Parameters
// 5)  Rest and Spread Operators
// 6)  Destructuring Assignment
// 7)  Classes
// 8)  Modules
// 9)  Promises
// 10)  Async/Await
// 11)  Callbacks
// 12)  Try and Catch

//  💥  Topics of ES6   💥
// 1)  let and const Are ES6

// 6)  Destructuring
// Answer: Destructuring is a JavaScript expression that
//  makes it possible to unpack values from arrays, or properties
// from objects, into distinct variables.

//Question 1:
// var obj = { name: "prahlad", age: 21, City: "Mumbai" };
// var { name, age, City } = obj;

//Question 2:
//Skip the second value in the array
var arr = [1, 2, 3];
var [a, , b] = arr;
// console.log(a, b);

// 7)  Classes
//Question 1:

// 9)  Promises
//  A promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
// A promise may be in one of 3 possible states: resolved, rejected, or pending.

//Question 1:
// Answer:

// var ans = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am resolved");
//   }, 3000);
// });

// console.log(ans);

//Question 2:
// let promise = new Promise((resolve, reject) => {
//   let success = true; // Simulate success or failure

//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed.");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result); // Output: Operation was successful!
//   })
//   .catch((error) => {
//     console.log(error); // Output: Operation failed.
//   });

//Question 3:
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First promise resolved");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second promise resolved");
//   }, 2000);
// });

// Promise.all([promise1, promise2])
//   .then((results) => {
//     console.log(results); // Output: ["First promise resolved", "Second promise resolved"]
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 11)  Callbacks

//Callback Hell:
// What is Callback Hell?
// Callback Hell is an anti-pattern in programming where a sequence of nested callbacks
// makes the code hard to read and debug. It is common in asynchronous programming with
// callbacks. Callback Hell is also known as the Pyramid of Doom due to its shape.



//Question 1:
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data is ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(2, () => {
  getData(3, () => {
    getData(4);
  });
});

// 12) Try and catch
//Question 1:
// try {
//   console.log("Start of try runs");
//   unicycle;
//   console.log("End of try runs -- never reached");
// } catch (error) {
//   console.log("Caught an error:", error);
// }
