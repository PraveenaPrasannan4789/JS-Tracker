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





//creating a resolved promise use //Promise.resolve()
const myPromise1= Promise.resolve().then(console.log('done'));
console.log(myPromise1) //{<pending>} // because after printing done console.log() returns undefined.




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