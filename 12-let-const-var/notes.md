## var
Function-scoped (or globally scoped if outside a function)
Hoisted (declarations are moved to the top of their scope)
Can be re-declared and updated
Example:
function exampleVar() {
    var name = "Alice";
    if (true) {
        var name = "Bob"; // same variable! affects outer scope
        console.log("Inside if:", name); // Bob
    }
    console.log("Outside if:", name); // Bob
}
exampleVar();

✅ Key Point: var does not have block scope (inside {}), so it can cause unintended overwrites.

## let
Block-scoped (inside {} only)
Not hoisted in the same way as var (cannot access before declaration — Temporal Dead Zone)
Can be updated, but cannot be re-declared in the same scope
Example:
function exampleLet() {
    let name = "Alice";
    if (true) {
        let name = "Bob"; // different variable, block scoped
        console.log("Inside if:", name); // Bob
    }
    console.log("Outside if:", name); // Alice
}
exampleLet();

✅ Key Point: let respects block scope, safer than var for loops and conditionals.

## const
Block-scoped like let
Cannot be updated or re-declared (for primitive values)
For objects/arrays, you cannot reassign the variable, but can modify contents
Example with primitive:
const pi = 3.14;
console.log(pi); // 3.14
// pi = 3.1415; // Error: Assignment to constant variable
Example with object:
const person = { name: "Alice", age: 25 };
person.age = 26; // ✅ Allowed: modifying property
// person = { name: "Bob" }; //  Not allowed: reassigning
console.log(person);