// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async/Await Example1");
//       resolve("Success");
//     }, 3000);
//   });
// }

// // Promise chnaining Exmaple

// function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async/Await Example2");
//       resolve("Success");
//     }, 3000);
//   });
// }

// console.log("Fetching Data1....");
// let p1 = asyncFunc();
// p1.then((result) => {
//   console.log("Promise Fullfilled", result);
//   console.log("Fetching Data2....");

//   asyncFun2().then((result2) => {
//     console.log("Promise Fullfilled 2", result2);
//   });
// });

// p1.catch((error) => {
//   console.log("Promise Rejected", error);
// });

// 2 - Async/Await Example
// async function always returns a promise
// async → makes a function return a Promise

// await → pauses execution until the Promise resolves

// ⚠️ Important:
// await does NOT block JavaScript — it only pauses that function.
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("API Data");
    }, 2000);
  });
}

async function getAllData() {
  console.log("Fetching Data1...");
  await getWheatherData(1);
  console.log("Fetching Data2...");
  await getWheatherData(2);
  console.log("Fetching Data3...");
  await getWheatherData(3);
}
