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

async function getData() {
  let x = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await x.json();
  console.log(data);
}

async function main() {
  console.log("Loading Data");
  let p1 = await getData();
  console.log(p1);
  console.log("Final Data");
}

main();
