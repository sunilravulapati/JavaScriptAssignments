let courses = ["javascript", "react", "node", "mongodb", "express"];

//name length > 5
let lenGt5 = courses.filter(s => s.length > 5)
console.log("Length greater than 5: ",lenGt5)

let upper = courses.flatMap(s => s.toUpperCase())
console.log("Upper Case: ",upper)

let reduced = courses.reduce((acc,s) => acc + s)
console.log("Concatenate: ",reduced)

let f1 = courses.find(s => s === "react")
console.log(f1)

let f2 = courses.findIndex(s => s === "node")
console.log("Index of node: ",f2)