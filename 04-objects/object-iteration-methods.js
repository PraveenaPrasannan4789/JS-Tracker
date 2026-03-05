//object iteration methods or object utilities
const employees = {
    name:"abc",
    greet(){
        return `hi ${this.name}`
    }
}
console.log(Object.keys(employees));
console.log(Object.values(employees));

console.log(Object.entries(employees));
console.log(Object.getOwnPropertyNames(employees))