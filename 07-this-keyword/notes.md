# What is this?

this refers to the object that is executing the current function.

The value of this is determined by how the function is called, not where it is defined.

## 1. this in Global Scope

In browsers:

console.log(this);

Output:

window
## 2. this in Regular Functions
function show() {
  console.log(this);
}

show();

Non-strict mode → window

Strict mode → undefined

## 3. this in Object Methods
const user = {
  name: "John",
  greet() {
    console.log(this.name);
  }
};

user.greet();

Output:

John

Here this refers to the object calling the method.

## 4. this in Arrow Functions

Arrow functions do not have their own this.
They inherit this from the parent scope (lexical this).

const obj = {
  name: "John",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow(); // undefined
## 5. call(), apply(), and bind()

These methods allow you to manually set this.

function greet() {
  console.log(this.name);
}

const user = { name: "John" };

greet.call(user);

Output:

John
## 6. this in Constructor Functions
function User(name) {
  this.name = name;
}

const u1 = new User("John");

Here this refers to the newly created object.

Important Rule

The value of this depends on how the function is called (call-site).