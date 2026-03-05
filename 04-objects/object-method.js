const employees={
    name:'anurag', //data property(key :name , value:anurag)
    greet(){  //method property (key : greet , value :function)
 console.log(`Hello ${this.name}`); //Refers to the object itself. Works correctly inside regular functions (not arrow functions)
 return `Hello ${this.name}`;
    }
}

console.log('employees', employees);
console.log('employee', employees.greet());
employees.greet();

//Object.keys() only lists enumerable own properties that are data properties.
console.log(Object.getOwnPropertyNames(user));
// ["name", "greet"]