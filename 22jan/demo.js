let student = {
    sno:101,
    name:'ravi',
    age:19
}
//to send this data to others we have to convert it in json form where all the keys must be within ""
//if the value is a string then we have to use "" unlike js where we can use "" or ''
// let studentJSON={
//     "sno":1,
//     "name":"ravi",
//     "age":19
// }
console.log(typeof student)

// js object to JSON
let studentJSON = JSON.stringify(student)
console.log(studentJSON)

console.log(typeof studentJSON)
//JSON is of string type

//JSON TO JS OBJECT
let stud = JSON.parse('{"sno":1}')
console.log(typeof stud)