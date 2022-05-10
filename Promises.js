const log = console.log;
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Fullfilled");
  }, 5000);
  //   reject("Promise1 Rejected");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 Fullfilled");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((value) => {
    log(value);
  })
  .catch((err) => {
    log(err);
  });
// async function callPromises() {
//   await promise1
//     .then((value) => {
//       log(value);
//     })
//     .catch((err) => {
//       log(err);
//     });

//   await promise2
//     .then((value) => {
//       log(value);
//     })
//     .catch((err) => {
//       log(err);
//     });
// }

// callPromises();
