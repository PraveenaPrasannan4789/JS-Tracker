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


const dataNew= {
   newVal: {...employee},
   ...employee,
   new:[8,9]
}

console.log(dataNew)