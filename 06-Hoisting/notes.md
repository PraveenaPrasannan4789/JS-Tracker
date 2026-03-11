## 1. JavaScript Hoisting – Notes
What is Hoisting?

Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

This happens during the creation phase of the execution context.

Example:

console.log(a);
var a = 5;

JS internally treats it like:

var a;
console.log(a); // undefined
a = 5;

Output:

undefined
## 2. Variable Hoisting
var

var is hoisted and initialized with undefined

console.log(x);
var x = 10;

Output:

undefined

Equivalent to:

var x;
console.log(x);
x = 10;
let and const

let and const are hoisted but NOT initialized.

They stay in the Temporal Dead Zone (TDZ).

Example:

console.log(a);
let a = 5;

Output:

ReferenceError
## 3. Function Hoisting
Function Declaration

Function declarations are fully hoisted.

sayHello();

function sayHello(){
  console.log("Hello");
}

Output:

Hello
Function Expression

Function expressions are NOT hoisted.

sayHi();

var sayHi = function(){
  console.log("Hi");
};

Output:

TypeError: sayHi is not a function

Because:

var sayHi;
sayHi(); // undefined()