Arrow functions are a shorter way to write functions in JavaScript.
Arrow functions DO NOT have their own this

This is the most asked concept.

## Regular function:
const obj = {
    name: "Praveena",
    greet: function () {
        console.log(this.name);
    }
};
obj.greet(); // Praveena
# Arrow function:
const obj = {
    name: "Praveena",
    greet: () => {
        console.log(this.name);
    }
};
obj.greet(); // undefined (or window.name)

Because arrow functions take this from parent scope, not the object.