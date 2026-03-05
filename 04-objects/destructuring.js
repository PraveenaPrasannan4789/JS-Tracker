const user = {
  name: "Praveena",
  age: 24
};

const {name,age}= user; //basic destructuring

//same as
//const name= user.name

const {name:userName , age: ag}= user; //renaming 

console.log(userName,ag);


const {salary="Unknown",age:ageOfEmployee="unKnown"}= user //setting default value
console.log(salary,ageOfEmployee);

//nested destructuring

const employee={
    name:"alamkritha",
    age:25,
    salary:35,
    department:{
        name:"sales",
        employees:55,
        minSalary:55000
    }
}

const{name:employeeName, department:employeeDept}= employee;
//To rename whole nested object → department: employeeDept

//Then destructure nested keys from employeeDept separately
const {name:nam,employees:emp} = employeeDept;
console.log(employeeName, employeeDept,nam,emp)


//in function parameter

function greet({name, department:{name:empName,employees,minSalary}}){
console.log('in greet function..printing..',name,empName,employees,minSalary)
}

greet(employee)