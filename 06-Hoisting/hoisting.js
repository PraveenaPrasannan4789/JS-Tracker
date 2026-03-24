//var
console.log('a',a);
var a=5;
//javascript treats its as
var a;
console.log('a', a);
a=5;



// let and const
// let and const are hoisted but NOT initialized.
//They stay in the Temporal Dead Zone (TDZ).
console.log(b);// Cannot access 'b' before initialization
let b = 5; 
//javascript treats its as
let c;
console.log(c);// Cannot access 'b' before initialization
c = 5; 



//function hoisting
//Function declarations are fully hoisted.
fetch();
function fetch(){
    console.log('inside fetch function')
}


//Function expression
//Function expressions are NOT hoisted.
sayHello();
const sayHello= function add(){//Cannot access 'sayHello' before initialization
    console.log('add', 7);
}


sayHello1();
var  sayHello1= function add(){ //sayHello is not a function
    console.log('add', 7);
}


//let and const Hoisting
console.log(newVar); // ReferenceError: Cannot access 'newVar' before initialization
let newVar = 20;

console.log(newVar1); // ReferenceError: Cannot access 'newVar' before initialization
const newVar1 = 30;