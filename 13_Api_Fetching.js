// What is API Fetching?
// API Fetching is the process of retrieving data from a server using an Application Programming Interface (API).
// This is commonly done using HTTP requests to communicate with web services and retrieve data in formats like JSON or XML.
// In JavaScript, the Fetch API is a modern interface that allows you to make network requests similar to XMLHttpRequest (XHR).

// Example of API Fetching using the Fetch API

const URL = "https://dog.ceo/api/breeds/image/random";

const getFacts = async () => {
  console.log("Fetching Data.....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
};

