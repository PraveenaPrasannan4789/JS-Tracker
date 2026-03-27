## Introduction to Error Handling in JavaScript

Error handling is the process of responding to runtime errors in a program without crashing it. JavaScript provides:

try...catch blocks
throw statement
finally block
## The try...catch Statement

Syntax:

try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}

Example:

try {
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}
error is an object containing:
name → Error type (e.g., ReferenceError, TypeError)
message → Description of the error
stack → Stack trace (useful for debugging)
## The throw Statement

You can throw custom errors.

Syntax:

throw new Error("This is a custom error message");

Example:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(5, 0));
} catch (e) {
    console.log(e.message); // Division by zero is not allowed
}
Other built-in error types: TypeError, ReferenceError, SyntaxError, RangeError.
## The finally Block

Code inside finally always executes, regardless of errors.

try {
    console.log("Trying risky code");
    throw new Error("Oops!");
} catch (e) {
    console.log("Caught:", e.message);
} finally {
    console.log("Finally always runs");
}

Output:

Caught: Oops!
Finally always runs