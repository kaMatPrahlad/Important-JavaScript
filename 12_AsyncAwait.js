function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async/Await Example");
      resolve("Success");
    }, 3000);
  });
}

let p1 = asyncFunc();
p1.then((result) => {
  console.log("Promise Fullfilled", result);
});
p1.catch((error) => {
  console.log("Promise Rejected", error);
});
