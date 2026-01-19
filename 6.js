//functions

//normal function declaration
//provides more code level control
function f1(a,b){
    return a+b;
}

//function expression
//provides more application level control
let f2 = function(a,b){
    return a+b
}

//arrow function
//used to simplify a function expression
//mainly use this for short / one liner functions
let f3 = (a,b) => a+b;
// or 
let f4 = (a,b) => {
    let sum = a+b;
    return sum;
}

console.log(f1(10,20));
console.log(f2(10,20));
console.log(f3(10,20));
console.log(f4(10,20));