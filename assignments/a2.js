//array-operations simple
//1
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//using filter => temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35:", above35);

const fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Fahrenheit:", fahrenheit);

const average = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average:", average);

const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First above 40:", firstAbove40);

const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", indexOf28);

//2
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

//3
let marks = [78, 92, 35, 88, 40, 67];

//using filter getting the marks >= 40
let pass = marks.filter(s=> s >= 40)
console.log("Pass marks: ",pass)

//using map adding 5 grace marks
let grace = marks.map(s=> s + 5)
console.log("After adding grace marks",grace)

//using reduce finding out the highest marks
let reduce = marks.reduce((acc,s) => (acc > s) ? acc : s)
console.log("Highest Marks: ",reduce)

//using find getting the first marks < 40
let f11 = marks.find(s => s<40)
console.log(f11)

//using findIndex checking if 92 is there or not
let f22 = marks.findIndex(s => s === 92)
console.log("Index: ",f22)