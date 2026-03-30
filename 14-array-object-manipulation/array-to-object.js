//1.Using index as key

const arr = ["a", "b", "c"];

const obj = { ...arr };

console.log(obj);
// {0: "a", 1: "b", 2: "c"}


//2.using reduce
const obj1 =  arr.reduce((acc,val,idx)=>{
acc[idx]= val;
return acc;
},{})
console.log(obj1);


//Custom keys
const newUsers = ["Alice", "Bob"];

const newObj = newUsers.reduce((acc, name) => {
  acc[name] = true;
  return acc;
}, {});

console.log(newObj);
// {Alice: true, Bob: true}



//4.Array of objects → Object
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const obj2 =  users.reduce((acc,val)=>{
    acc[val.id] = val;
return acc;
},{})

console.log('obj2',obj2)

