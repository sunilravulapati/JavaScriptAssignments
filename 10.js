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
let f1 = marks.find(s => s<40)
console.log(f1)

//using findIndex checking if 92 is there or not
let f2 = marks.findIndex(s => s === 92)
console.log("Index: ",f2)