// example 1
//creating a promise

const myPromise= new Promise((resolve,reject)=>{
  console.log('inside the promise');
  const success=true;
  if(success){
    resolve("done");
  }
  else{
    reject("failed")
  }
})
console.log('myPromise',myPromise) //Promise {'done'}




// example 2
//creating a resolved promise use //Promise.resolve()
const myPromise1= Promise.resolve().then(console.log('done'));
console.log(myPromise1) //{<pending>} // because after printing done console.log() returns undefined.


// Note:
// What happens step-by-step

// console.log('done') runs immediately (synchronous).

// It prints:

// done

// console.log() returns undefined.

// So the code effectively becomes:

// Promise.resolve().then(undefined)

// .then() receives no callback.

// It still returns a new promise, which is initially pending until the microtask finishes.


// example 3
//creating a resolved promise use //Promise.resolve() 
const myPromise2= Promise.resolve().then(()=>{console.log('done')})
console.log(myPromise2);//{<pending>}



// Note:

// What happens

// Promise.resolve() → creates a resolved promise

// .then() schedules the callback in the microtask queue

// console.log(myPromise2) runs before the microtask executes

// So DevTools prints:

// Promise { <pending> }
// done

// But after the microtask runs, the promise becomes:

// Promise { fulfilled: undefined }

// The value is undefined because the .then() function doesn't return anything.

// example 4
//Handling a Promise
myPromise.then((result)=>{
  console.log('resolved', result);
}).catch((result)=>{
  console.log('rejected', result);
})


