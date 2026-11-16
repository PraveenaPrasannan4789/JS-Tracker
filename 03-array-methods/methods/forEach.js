//examples

//print all elements
let numbers = [678,675,453,332,111];
numbers.forEach((x)=>{
    console.log(x);
    
})


//print with index
let fruits = ["apple","orange","pineapple"];
fruits.forEach((val,indx)=>{
    console.log(val,indx)
})


//modify external variable
let numb=[23,45,67];
let n=70;
numb.forEach((x)=>{
    n+=x;
})
console.log('modified value', n)

//modify external variable another example
let numb1=[2,5,7];
let m=80;
numb1.forEach((x)=>{
    m+=x;
})
console.log('modified value', m)
