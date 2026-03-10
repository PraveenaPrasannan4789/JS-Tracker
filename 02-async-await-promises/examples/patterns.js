// Exercise 1

// Create two async functions with setTimeout.
async function timer1(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res('done-1')
        },1000)
    }).then(console.log)
}

async function timer2(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res('done-2')
        },2000)
    }).then(console.log)
}


timer1();
timer2();


// Exercise 2

// Run them sequentially.
async function timerNew() {
     await new Promise((res)=>{
        setTimeout(()=>{
            res('done-1')
        },1000)
    }).then(console.log)
     await new Promise((res)=>{
        setTimeout(()=>{
            res('done-2')
        },2000)
    }).then(console.log)
}


timerNew();

// Exercise 3

// Run them using Promise.all.

async function timerNew1() {
Promise.all([
     await new Promise((res)=>{
        setTimeout(()=>{
            res('done-1')
        },1000)
    }).then(console.log),
     await new Promise((res)=>{
        setTimeout(()=>{
            res('done-2')
        },2000)
    }).then(console.log)
]);
}

timerNew1();

// Compare execution time.