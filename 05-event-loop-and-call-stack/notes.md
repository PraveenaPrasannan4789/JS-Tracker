#  Event Loop & Call Stack
##  Call Stack

The Call Stack is a data structure used by JavaScript to keep track of function execution.

JavaScript executes code line by line using a stack (Last In First Out – LIFO).

## How it works

When a function is called → it is pushed into the stack

When the function finishes → it is popped from the stack

Example
function greet() {
  console.log("Hello");
}

function start() {
  greet();
}

start();
Execution Flow
Call Stack

start()
greet()
console.log()

Then it pops in reverse order.

console.log() -> removed
greet() -> removed
start() -> removed

## What Happens in Stack Overflow

If too many functions are added without finishing, the stack becomes full.

Example:

function recursive() {
  recursive();
}

recursive();

Result:

## Web APIs

JavaScript itself cannot handle timers or DOM events.

The browser provides Web APIs like:

• setTimeout
• setInterval
• fetch
• DOM events

These are handled outside the JavaScript engine.

Example:

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
## Callback Queue

After Web APIs finish their task, the callback goes to the Callback Queue.

Example:

setTimeout → Web API → Callback Queue
## Event Loop

The Event Loop checks:

Is Call Stack empty?

If YES → it pushes tasks from Callback Queue to Call Stack

The Event Loop is the mechanism that allows JavaScript (which is single-threaded) to handle asynchronous operations like:

API calls
setTimeout
Promises
user events (click, input)

Event Loop Flow
Call Stack
   ↓
Web APIs
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Back to Call Stack
## Example of Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 0);

console.log("End");

Output:

Start
End
Timer finished

Why?

console.log("Start") → Call stack

setTimeout → Web API

console.log("End") → runs immediately

Timer callback → Callback Queue

Event Loop pushes it to stack

## Microtask Queue

Promises go to Microtask Queue, which has higher priority.

Example:

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
});

console.log("End");

Output:

Start
End
Promise
Timeout

## SExecution order:

Call Stack
↓
Microtask Queue (Promises)
↓
Callback Queue (Timers)

## JavaScript is single-threaded, meaning it has only one call stack and executes one thing at a time.

But how does it look like multi-threaded?

Even though JS is single-threaded, it uses:

Event Loop
Web APIs (browser)
Callback Queue / Task Queue
Microtask Queue (Promises)

This allows it to handle multiple tasks like:

API calls
Timers (setTimeout)
File operations (Node.js)