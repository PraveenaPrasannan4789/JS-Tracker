//examples

//sum of numbers
const numberArray = [1, 4, 6, 7, 8];
const result = numberArray.reduce((acc, num) => acc + num, 0);
console.log("result", result);

//count occurences
const names = ["ammu", "ammu", "ammu", "lal", "geethu"];
const occurences = names.reduce((acc, data) => {
  acc[data] = (acc[data] || 0) + 1;
  return acc;
}, {});
console.log("occurences", occurences);

//flattened array
const flat = [[1, 2], [9, 0], 5];
const flatArray = flat.reduce((acc, val) => {
  acc = acc.concat(val);
  return acc;
}, []);
console.log("flatArray", flatArray);

//flattened array new
const flat1 = [[1, 2], [9, 0], 5];
const flatArray1 = flat1.reduce((acc, val) => {
  acc = acc.concat(val);
  return acc;
}, []);
console.log("flatArray1", flatArray1);
