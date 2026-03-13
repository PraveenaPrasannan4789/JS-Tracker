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
        console.log('inside dataNew function')
    }
}
dataNew.greet();