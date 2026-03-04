# What is an Object?

An object is a collection of key–value pairs used to represent structured data.

const user = {
  name: "Praveena",
  age: 24,
  isActive: true
};

Think of it like a real-world entity.

## Accessing Object Properties
Dot notation
user.name
Bracket notation
user["name"]
When to use bracket notation?

When:

Property name is dynamic

Property has spaces

Property comes from a variable

const key = "age";
user[key];  // 24
## Adding / Updating / Deleting
user.city = "London";      // Add
user.age = 25;             // Update
delete user.isActive;      // Delete
## Nested Objects (Important for APIs)
const student = {
  name: "Asha",
  marks: {
    maths: 90,
    science: 85
  }
};

console.log(student.marks.maths);

Real-world use: Most API responses are nested objects.

## Object Methods

Objects can contain functions.

const user = {
  name: "Praveena",
  greet() {
    return `Hello ${this.name}`;
  }
};
Important: this

Refers to the object itself

Works correctly inside regular functions (not arrow functions)

## Object.keys / values / entries (Very Important)
Object.keys(user)      // ["name", "age"]
Object.values(user)    // ["Praveena", 24]
Object.entries(user)   // [["name", "Praveena"], ["age", 24]]

Used a lot in:

Iteration

Transformations

Converting object to array

# Destructuring (Mid-Level)

Destructuring = Extract values from object easily.

## Basic Destructuring
const user = {
  name: "Praveena",
  age: 24
};

const { name, age } = user;

console.log(name); // Praveena

Same as:

const name = user.name;
const age = user.age;

But cleaner.

## Renaming While Destructuring (Interview Favorite)
const { name: userName } = user;

console.log(userName);

Here:

name = property

userName = variable

## Default Values
const { city = "Unknown" } = user;

Used when property might not exist.

## Nested Destructuring (Very Important)
const student = {
  name: "Asha",
  marks: {
    maths: 90
  }
};

const {
  marks: { maths }
} = student;

console.log(maths); // 90

Used heavily when handling API responses.

## Destructuring in Function Parameters (Very Important)
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}

greet(user);

Instead of:

function greet(user) {
  console.log(user.name);
}

Very common in:

React

Node.js

Backend APIs

# Spread Operator with Objects (Related Concept)
const updatedUser = {
  ...user,
  age: 25
};

Used for:

Immutability

Updating state (React)

Merging objects