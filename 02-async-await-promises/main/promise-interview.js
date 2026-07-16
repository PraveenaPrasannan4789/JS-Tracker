//Parallel execution concept
// Promise aggregation
// Difference between manual vs built-in APIs

// const getResults = (tasks) => {
//   return Promise.all(tasks.map((task) => task()));
// };

// getResults([
//   () => Promise.resolve("done-1"),
//   () => Promise.resolve("done-2"),
// ]).then((result) => console.log(result));

//alternative

const getalternative = (tasks) => {
  return new Promise((resolve, reject) => {
    let finalArray = [];
    let completed = 0;
    tasks.forEach((task, i) => {
      task()
        .then((val) => {
          finalArray[i] = val;
          completed++;
          if (completed === tasks.length) {
            console.log("finalArray", finalArray);
            return resolve(finalArray);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    });
  });
};

getalternative([
  () => Promise.resolve("new done 1"),
  () => Promise.resolve("new done 2"),
]).then((res) => console.log(res));

const data = Promise.all(
  [() => Promise.resolve(1), () => Promise.resolve(2)].map((fn) => fn()),
);

data.then(console.log);

Promise.all([Promise.resolve("OK"), Promise.reject("Error")]).catch(
  console.log,
);
