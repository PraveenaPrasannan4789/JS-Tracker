//array operations
const arr = [1, 2];
arr.push(6);
console.log('arr', arr)
arr.pop();
console.log('arr', arr)


const array2 = [3,5,6,7];
array2.unshift(0);
console.log('array2', array2);
array2.shift();
console.log('array2',array2);


//spread operator
const array3=[3,5,6,8];
const newArray = [...array3,4];
console.log('newArray', newArray);

//remove duplicates
const arrayDuplicates= [7,5,4,4,7,5];
const removeDuplicates= [...new Set(arrayDuplicates)];
console.log('modified array', removeDuplicates);



//object manipulations

//access//update user
const user = { name: "Praveena", age: 25 };

user.name='xyz';
console.log('user', user);

//adding a property
user.city='alappy';
console.log('user', user);

//deleting 
delete user.name;
console.log('user', user);

console.log('object.keys', Object.keys(user));
console.log('object.values', Object.values(user));
console.log('object.entries', Object.entries(user));


//loop through object

for(let x in user){
    console.log('x',x,user[x])
}

//merge objects
const a = { x:1 };
const b = { y:2 };

const merged = { ...a, ...b };

console.log(merged); // {x:1, y:2}


