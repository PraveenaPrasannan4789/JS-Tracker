//Example 1:
// Creating object
const user = {
  name: "Praveena",
  age: 24
};

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Adding property
user.city = "London";

// Deleting property
delete user.age;


//Example 2

const employees={
    name:"ABc",
    department:"sales",
    salary:45000
}

//dot notation
console.log(employees.name);
console.log(employees.department);
console.log(employees.salary);
employees.name='xyz';


//bracket notation
console.log(employees["name"]); //used when property name is dynamic,property comes from a variable
employees["name"]="abc";
console.log(employees["name"]);


//adding,updating,deleting
employees.age= 34;
employees["age"]=55;
console.log(employees);
delete employees.age;
console.log(employees);


