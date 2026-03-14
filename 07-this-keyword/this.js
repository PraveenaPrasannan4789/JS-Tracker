//this refers to the object that is currently executing the function.

const obj= {
    name:"ammu",
    greet(){
        console.log(`hi this is ${this.name}`)
    }
}

obj.greet();



//global context
console.log(this)//refers window object


//this inside a Regular Function
function inside(){
    console.log(this);
}

inside();


// this in Object Method
const dataSet = {
    name:"xyz",
    sayHi(){
        console.log(`my name is ${this.name}`)
    }
}

dataSet.sayHi();

//this with Arrow Functions
//Arrow functions do NOT have their own this.

const dataNew = {
    employeeName:"rahul",
    greet:()=>{
        console.log('inside dataNew function',this.name)
    }
}
dataNew.greet();

//arrow function fix
const dataNew1= {
employeeName:"rahul",
    greet(){
        const fix= ()=>{
        console.log('inside dataNew function',this.employeeName)
    }
    fix();
}
}

dataNew1.greet();


//this with call()

const dataNewSet = {
    name:"alex",
    age:24
}

function callFn(){
    console.log('hi', this);
}
callFn.call(dataNewSet);



//8. this with apply()

// Same as call, but arguments are passed as an array.

const userData={
    name:'xyz',
    age:78
}

function xPrint(arg){
console.log('x', arg)
}

xPrint.apply(userData,[25])

//this with bind()
//bind() returns a new function with fixed this.
function printName(){
    console.log(this.name)
}

const person = {
    name:"ali",
    age: 34
}

const clFn= printName.bind(person);
clFn();


//this in Constructor Function
function user(name){
    this.name=name
}

const cons= new user('abc');
console.log('cons name ',cons.name)


//this in Event Handlers
//button.addEventListener("click", function() {
//  console.log(this);
//});


//Call-site determines this
const userDataNew= {
    userName:"user",
    greet(){
        console.log('in userDataNew',this.userName)
    }
}

const user1 = userDataNew.greet;
user1();//undefined