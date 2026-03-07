// What is API Fetching?
// API Fetching is the process of retrieving data from a server using an Application Programming Interface (API).
// This is commonly done using HTTP requests to communicate with web services and retrieve data in formats like JSON or XML.
// In JavaScript, the Fetch API is a modern interface that allows you to make network requests similar to XMLHttpRequest (XHR).

// Example of API Fetching using the Fetch API

// const URL = "https://dog.ceo/api/breeds/image/random";

// const getFacts = async () => {
//   console.log("Fetching Data.....");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// };

// async function main() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data is Resolved");
//     }, 3000);
//   });
// }

// let data = main();
// data.then((ans) => {
//   console.log("Show Data", ans);
// });
// data.catch((uttar) => {
//   console.log("Data Rejected", uttar);
// });

// async function getData() {
//   let x = await fetch("https://dog.ceo/api/breeds/image/random");
//   let data = await x.json();
//   console.log(data);
// }

// async function main() {
//   console.log("Loading Data");
//   let p1 = await getData();
//   console.log(p1);
//   console.log("Final Data");
// }

// main();

// Getting multiple Data using Fetch API in Function async
// async function getData() {
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1/comments",
//   );
//   let data = await response.json();
//   console.log(data);
// }

// getData();



// POST Data Fetching
// Explanation (line by line)

// fetch(url, options) → Sends a request to the server

// method: "POST" → Specifies HTTP POST request

// headers → Tells the server we’re sending JSON data

// body → Data sent to server (must be a string → JSON.stringify)

// .then(response => response.json()) → Converts response to JS object

// .catch() → Handles errors
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My Post",
    body: "This is a test post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "Learning Fetch API",
        userId: 101,
      }),
    });

    const data = await response.json();
    console.log("Post Created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();
