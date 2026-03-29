//let
function exampleLet(){
    let name ='xyz';
   if(true){
        let name ='abc';
        console.log('name inside',name);
    }
         console.log('name outside',name)
}

exampleLet();


//var
function exampleVar(){
    var name ='xyz';
    if(true){
        var name ='abc';
        console.log('name inside',name);
    }
     console.log('name outside',name)
}

exampleVar();


//const 
//primitive data types
const pi=3.14;
// pi=9.9; //error


//example with object
const person = { name: "Alice", age: 25 };
person.age = 26; // Allowed: modifying property
// person = { name: "Bob" }; // Not allowed: reassigning
console.log(person);



for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
// Output: var: 3 var: 3 var: 3

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 100);
}
// Output: let: 0 let: 1 let: 2

//This shows let preserves block scope in loops, while var does not.
