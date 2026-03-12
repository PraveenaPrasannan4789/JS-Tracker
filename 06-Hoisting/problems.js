
//Problem 1
var x = 10;
function test(){
    console.log(x);
    var x = 20;
}
test(); //undefined
// Because internally:
function test(){
    var x;
    console.log(x);
    x = 20;
}

//Problem 2
let a = 5;

function test1(){
   console.log(a);
}

test1(); // 5



//Problem 3
console.log(foo);

var foo = function(){
  return "Hello";   //undefined
}



//Problem 4
var l = 1;

function testNew(){
    console.log('lvalue',l);
    var l = 2;
}

testNew(); //undefined


//Problem 5
console.log(aVal);//undefined
console.log(b);//ReferenceError: Cannot access 'b' before initialization

var aVal = 10;
let b = 20;


//Problem 5
hello();

var hello = function(){
  console.log("Hello");
}//hello() is not a function