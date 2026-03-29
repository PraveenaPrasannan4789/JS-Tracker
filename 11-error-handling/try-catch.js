//The try...catch Statement
// try {
//     let result = riskyFunction();
//     console.log(result);
// } catch (error) {
//     console.log("An error occurred:", error.message);
// }

// error is an object containing:
// name → Error type (e.g., ReferenceError, TypeError)
// message → Description of the error
// stack → Stack trace (useful for debugging)

//The throw Statement

// throw new Error("This is a custom error message");

function divideFn(a, b) {
  if (b === 0) {
    throw new Error("dividng by zero not possible");
  }
  return a / b;
}

try {
  console.log(divideFn(5, 5));
} catch (e) {
  console.log("error", e.message);
}

//The finally Block
try {
  console.log("Trying risky code");
  throw new Error("Oops!");
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("Finally always runs");
}

//Nested try...catch
try {
  try {
    throw new Error("Inner error");
  } catch (e) {
    console.log("Inner catch:", e.message);
    throw new Error("outer error");
  }
} catch (e) {
  console.log("Outer catch:", e.message);
}

//Handling asynchronous errors (Promises / async-await)

async function fetchData() {
  try {
    let response = await fetch("invalid_url");
    let data = await response.json();
  } catch (e) {
    console.log("Async error:", e.message);
  }
}
fetchData();

// Problem 4: JSON Parsing

// Write a function parseJSON(str) that:

// Returns the object if JSON.parse works
// Throws a custom error "Invalid JSON" if parsing fails

function parseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (e) {
    throw new Error("Invalid JSON");
  }
}

try {
  const parseVal = parseJSON('{"name1":"ammu","age":34}');
  console.log(parseVal);
} catch (e) {
  console.log(e.message);
}

try {
  const parseVal = parseJSON('{"name1":"ammu",age:34}');
  console.log(parseVal);
} catch (e) {
  console.log(e.message);
}
