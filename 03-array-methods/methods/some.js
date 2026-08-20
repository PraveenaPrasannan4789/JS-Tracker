//examples

//check odd number exist

const oddNumbers = [3, 7, 8];
const check = oddNumbers.some((x) => {
  return x % 3 === 0;
});
const checkEvery = oddNumbers.every((x) => {
  return x % 3 === 0;
});
console.log("odd Number Exists", check);
console.log("is all odd numbers", checkEvery);

const evenNumbers = [3, 7, 8];
const check2 = evenNumbers.some((x) => {
  return x % 2 === 0;
});
