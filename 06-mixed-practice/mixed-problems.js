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


console.log('names',names,newNames)


