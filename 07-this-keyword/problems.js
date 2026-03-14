//Example 1
const obj = {
  name: "John",
  show() {
    console.log(this.name);
  }
};

const fn = obj.show;

fn(); // undefined Because this becomes global object.


//Example 2 fix above

const obj1 = {
  name: "John",
  show() {
    console.log(this.name);
  }
};

const fn1 = obj.show.bind(obj);
fn1();


//Example 3
const newObj = {
  name: "John1",
  arrow: () => {
    console.log(this.name);
  }
};

newObj.arrow();//undefined

//Example 4 fix above
const newObj1 = {
  name: "John1",
  arrow(){
    return () => {
    console.log(this.name);
  }}
};

const callObj= newObj1.arrow();
callObj();



//Example 5
function show() {
  console.log(this);
}

const obj12 = {
  fn: show
};

obj12.fn(); //{ fn: [Function: show] }

//Example 6
//Implement custom bind().
Function.prototype.myBind = function(context) {
  const fn = this;

  return function(...args) {
    return fn.apply(context, args);
  };
};


//Predict output:
const user = {
  name: "Mike",
  greet() {
    return function() {
      console.log(this.name);
    };
  }
};

user.greet()(); //undefined

//fix:

const user1 = {
  name: "Mike",
greet() {
  return () => {
    console.log(this.name);
  };
}
}

user1.greet()();


