//problem 1
//Array Method + Object Destructuring
// You have an array of users.

// const users = [
//   { name: "Rahul", age: 22 },
//   { name: "Anu", age: 27 },
//   { name: "John", age: 30 }
// ];

// Task

// Return an array containing only the names of users whose age is greater than 25.

// Expected Output

// ["Anu", "John"]

const users = [
  { name: "Rahul", age: 22 },
  { name: "Anu", age: 27 },
  { name: "John", age: 30 }
];

const filteredUsers= users.filter((user)=>{
    return user.age>25
})

const names=[];
filteredUsers.map((x)=>{
    const {name}=x;
    names.push(name);
})

//another way 
const newNames=[];
filteredUsers.map((x)=>{
   newNames.push(Object.values(x)[0]);
})

//another way
const result = users
  .filter(user => user.age > 25)
  .map(user => user.name);

console.log('names',names,newNames,result)

//problem 2
//Object Destructuring (Nested)
// const employee = {
//   name: "Arun",
//   department: {
//     name: "Engineering",
//     employees: 40
//   }
// };

// Task

// Destructure the object and print:

// Arun works in Engineering department
const employee = {
  name: "Arun",
  department: {
    name: "Engineering",
    employees: 40
  }
};
const {name:emploeeName , department:{name:departmentName}}= employee;
console.log(`${emploeeName} works in ${departmentName} department`)


//problem 3
// Array Reduce Problem
// const numbers = [10, 20, 30, 40];

// Task

// Use reduce() to find the total sum.

// Expected Output

// 100

const numbers = [10, 20, 30, 40];
const total= numbers.reduce((acc,num)=>{
  acc=acc+num;
return acc;
},0)
console.log('total',total)

//problem 4
// Event Loop Prediction

console.log("start");
setTimeout(()=>{
console.log('inside settimeout')
},3000);

Promise.resolve().then(()=>{
  console.log('inside promise resolve');
})
console.log("end");
//start 
//end
//inside promise resolve
//inside settimeout


//problem 5
// Object + Array Method Problem
// const products = [
//   { name: "Laptop", price: 60000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 20000 }
// ];

// Task

// Return only product names whose price is greater than 25000

// Expected Output

// ["Laptop", "Phone"]

const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 }
];

const productNames= products.filter((product)=>product.price>50000).map((product)=>product.name);
console.log((productNames));