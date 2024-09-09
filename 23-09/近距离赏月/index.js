// 使用 Promise.allSettled
const promises1 = [
  Promise.resolve(1),
  Promise.reject("Error 1"),
  Promise.resolve(2),
];

Promise.allSettled(promises1)
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Fulfilled-promises1:", result.value);
      } else {
        console.log("Rejected-promises1:", result.reason);
      }
    });
  })
  .catch((error) => {
    console.error("Error-promises1:", error);
  });

// 使用 Promise.all
const promises2 = [
  Promise.resolve(1),
  Promise.reject("Error 2"),
  Promise.resolve(2),
];

Promise.all(promises2)
  .then((results) => {
    console.log("Fulfilled-promises2:", results);
  })
  .catch((error) => {
    console.error("Error-promises2:", error);
  });
