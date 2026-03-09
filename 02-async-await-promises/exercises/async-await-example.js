// Exercise 1

// Create an async function that returns "Hello Async".

async function helloAsync(){
    return 'Hello Async';
}

const fetchVal = helloAsync();



// Exercise 2

// Use await with Promise.resolve(10) and print the value.
async function printValue() {
    const val= await Promise.resolve(10);
    console.log('val',val);
}

printValue()





// Exercise 3

// Write an async function that waits 2 seconds then logs "Finished".
async function printOutput(){
    setTimeout(()=>{
      console.log('finished')
    },2000)
};
printOutput();