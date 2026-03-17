## A Set in JavaScript is a collection that stores only unique values.
That means:

No duplicates allowed

Each value appears only once

Simple Example
let set = new Set();

set.add(1);
set.add(2);
set.add(2); // duplicate

console.log(set);

Output:

Set {1, 2}

The second 2 is ignored

## Key Features

Stores unique values only

Fast lookup → O(1)

No index like arrays

Can store any type (numbers, strings, objects)

Common Methods
set.add(value)      // add value
set.has(value)      // check if exists (true/false)
set.delete(value)   // remove value
set.size            // number of elements