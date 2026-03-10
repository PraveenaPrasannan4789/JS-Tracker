//handle multiple promises together.


// 1. Promise.all()

// Waits for all promises to resolve.
Promise.all([
    Promise.resolve(100),
    Promise.resolve(30)
]).then(console.log);


// 2. Promise.allSettled()

// Waits for all promises, even if some fail.

Promise.allSettled([
    new Promise((resolve)=>{
        resolve(100);
    }),
    new Promise((res,rej)=>{
        rej(200)
    })
]).then(console.log)

//3.Promise.race()

// Returns the first promise that settles.

Promise.race([
    new Promise((res,rej)=>{
        setTimeout(() => {
            res('hello')
        }, 2000);
    }),
    new Promise((res,rej)=>{
        setTimeout(()=>{
            res('second promise')
        },1000)
    })
]).then(console.log);


// 4.Promise.any()

// Returns first fulfilled promise.

// Rejects if all fail.
Promise.any([
    Promise.reject(100),
    Promise.reject(30)
]).then(console.log);