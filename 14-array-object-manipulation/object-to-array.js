//keys
const obj = { a: 1, b: 2 };

const keys = Object.keys(obj);

console.log(keys); // ["a", "b"]


//Values
const values = Object.values(obj);

console.log(values); // [1, 2]


//Entries
const entries = Object.entries(obj);

console.log(entries);
// [["a",1], ["b",2]]


//Convert entries → object
const arr = [["a", 1], ["b", 2]];

const objnew = Object.fromEntries(arr);

console.log(objnew);
// {a:1, b:2}


//Swap keys and values
const objnw = { a: 1, b: 2 };

const swapped = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);

console.log(swapped);
// {1: "a", 2: "b"}