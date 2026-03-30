//common questions
//problem-1
//count frequency
const arr = ["a", "b", "a"];

const freq= arr.reduce((acc,val)=>{
acc[val]= (acc[val]||0)+1;
return acc;
},{})

console.log('count frequency', freq)


//problem-2
//group by property
const users = [
  { name: "A", role: "dev" },
  { name: "B", role: "dev" },
  { name: "C", role: "test" }
];



const grouped= users.reduce((acc,val)=>{
    if(!acc[val.role]) acc[val.role]=[];
acc[val.role]=[...acc[val.role],val];
return acc;
},{})

console.log(grouped);



//problem-3
//flatten array
const arrToFlat = [[1,2], [3,4,4]];

const flat = arrToFlat.flat();

console.log(flat); // [1,2,3,4]
