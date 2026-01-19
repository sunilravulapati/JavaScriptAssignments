//immutable: all primitives types are immutable-cant be modified once created
//mutable: all reference types (types - arrays,objects,functions) are mutable-can be modified once created

//root class in java is Object
//root class in javascript is Object

//object: collection of key-value pairs, unordered collection
//keys are always strings
//values can be of any type
//the keys are unordered
//use for in loop to iterate over object keys
// to access object values use dot notation or bracket notation
//example: empObj.eno or empObj["eno"]

//object operations:
//1. create
let empObj = {
    eno:1,
    name:"John"
}

//2. access
console.log("Employee Number: " + empObj.eno);
console.log("Employee Name: " + empObj.name);

//3. Adding new property(dynamic nature of objects)
empObj.city = "New York";
console.log(empObj);

//4. Updating existing property
empObj.name = "Jane";
console.log(empObj);

//5. Deleting a property
delete empObj.city;
console.log(empObj);

//6. Iterating over object properties
for(let key in empObj){
    console.log(key + ": " + empObj[key]);
}

//7. freeze an object: prevent modifications to an object
Object.freeze(empObj);
empObj.eno = 2;
empObj.mobile = 99999999999;
console.log(empObj)


//8. get object keys
console.log(Object.keys(empObj)); //returns an array of keys
//9. get object values
console.log(Object.values(empObj)); // returns an array of values


//unpacking objects - destructuring
//why destructuring?
//1. to extract multiple properties from an object in a single statement
//2. to improve code readability
//the variable names should match the property names otherwise undefined will be assigned
let test = {
    a:10,
    b:20,
    c:30
}

let {a,b,c} = test; //object destructuring
console.log(a);

//complex object
let student = {
    id:1,
    name:"sam",
    marks: [90, 80, 85],
    address: {
        city: "Hyderabad",
        pincode: 500023
    },
    getData: function(){
        //object processing business logic
        //this function is a member of the object - so use this method to exclusively access object properties
        //this is a method
        console.log(this.marks[0]) //'this' refers to the current object
        //find the average marks
        let total = 0;
        for(let m of this.marks){
            total += m;
        }
        let avg = total / this.marks.length;
        console.log("Average Marks: " + avg);
    }
}

console.log(student.marks)
console.log(student.address.city);
student.getData(); //method invocation
//*whenever we are not giving a name to the function it is called anonymous function
