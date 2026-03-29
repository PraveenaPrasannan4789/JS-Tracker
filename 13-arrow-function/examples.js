//arrow function
const x=()=>{
    console.log('x printed')
}

x();


//regular fn
const obj= {
name:"xyz",
greet:function(){
    console.log(this.name)
}
}

obj.greet();


//arrow function
const obj1 = {
    name: "Praveena",
    greet: () => {
        console.log(this.name);
    }
};
obj1.greet(); // undefined (or window.name)