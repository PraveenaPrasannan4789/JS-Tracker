// 5 Final Practice Problems
// Problem 1

console.log("Start");

Promise.resolve('done').then((res)=>console.log(res))

console.log("End");




// Problem 2
async function test(){
 const data= await new Promise(res=> res( "Hello, in test promise"));
 return data;
}
test().then(console.log);




// Problem 3
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(console.log);





// Problem 4
Promise.race([
  new Promise(res => setTimeout(() => res(1),200)),
  new Promise(res => setTimeout(() => res(2),100))
]).then(console.log);






// Problem 5
async function test1(){
  const a = await Promise.resolve(5);
  const b = await Promise.resolve(10);
  console.log(a+b);
}

test1();