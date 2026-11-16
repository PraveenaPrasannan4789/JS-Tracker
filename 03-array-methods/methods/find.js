//examples

//find first number >10
let numbers=[50,90,70,67];
let result= numbers.find((num)=>{
   return num %2 ==0

})
console.log('number',result)



//finding the user 
let users=[
    {
        name:"ammu",
        age:23
    },
    {
        name:"veena",
        age:35
    }
]
let eligible = users.find((x)=>x.age<25)
console.log('eligible',eligible)



//no match scenario
let matches=['mumbai','agra'];
let res= matches.find((x)=>x.length>9)
console.log('result',res)

//no match scenario example 2
let matches1=['mumbai','agra'];
let res1= matches1.find((x)=>x.length>9)
console.log('result',res1)
