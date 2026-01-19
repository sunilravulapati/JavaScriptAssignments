//callback function
//in js we can pass functions as arguments to other functions
function test1(a){
    console.log(a())
}
test1(function(){
    return 123;
})
//what is sent to test1 - the entire function definition / anonymous function is sent as argument
//when we call test1, a will refer to the function definition/ anonymous function
//so when we do console.log(a), it will print the function definition / anonymous function
//when we do a() it will invoke the function and return 123
//who is calling test1? - it is being called by the application .
//if we dont call the test1 function, anonymous function will never be invoked
//callback functions increases the complexity but these are used as there are scenarios where we dont know the time taken by a function to be executed
//eg: fetching data from a server - we dont know how much time it will take to fetch the data from the server
//so we pass a callback function which will be invoked once the data is fetched from the server


//Array - ordered collection
//not used in real world applications as they can be mutated easily
let skills = ["html", "css", "js", "react"];

//accessing(unpacking / destructuring) array elements
// in array destructuring, the variable names can be different from the array elements
let [skill1, skill2, skill3, skill4] = skills; //array destructuring
console.log(skill1)
console.log(skill3)

//inserting an element - at the start,end,middle(in between / some position)
//at start - unshift() method
skills.unshift('angular','java')
console.log(skills);
//at end - push() method
skills.push('python')
console.log(skills)
//at middle / some position - splice() method
skills.splice(1,0,'scala') //splice(index,delete count,item1,item2,...)
console.log(skills);

//deletion of elements - at start,end,middle
//at start - shift() method
skills.shift()
console.log(skills)
//at end - pop() method
skills.pop()
console.log(skills)
//at some position - splice() method
skills.splice(2,1) //splice(index,delete count,item1,item2,...)
console.log(skills)