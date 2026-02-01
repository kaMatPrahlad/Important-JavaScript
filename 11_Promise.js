// //What is Promise in JavaScript?
// Promises are used to handle asynchronous operations in JavaScript.
//  They represent a value that may be available now,
//  or in the future, or never. A Promise is in one of these states:-
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Creating a Promise
// let promise = new Promise((Reslove, Reject) => {
//   console.log("Promise is pending");
//   //   Reslove("Promise is Resloved");
//   Reject("Some error occurred");
// });
// // console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

const getPromise = () => {
  return new Promise((reslove, reject) => {
    console.log("I am a Promise");
    reslove("Promise is Resloved");
    // reject("Some error occurred");
  });
};

let promise = getPromise();
// result and error are parameters
promise.then((result) => {
  console.log("Promise Fulfilled", result);
});
promise.catch((error) => {
  console.log("Promise Rejected", error);
});
