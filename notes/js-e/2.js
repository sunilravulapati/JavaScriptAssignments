// let student = {
//     name : 'ravi',
//     roll : 101
// }

// console.log(student.name)
// console.log(student.roll)
// console.log(student.city) // undefined
// //console.log(student.city.length) // gives an error that says cant read properties of undefined
// console.log(student.city?.length ?? "Not exist") // ? is optional chaining.....checks if that property exists or not for that
// console.log(student.city??"Property not existed") // ?? nullish coalescing


//Dates
//new Date() , new Date(yyyy,mm,dd) , new Date(issDate) , new Date(timestamp)
//Date.now()
// YYYY-MM-DD T HH:MM:SS.SSS Z (this is the ISO format)
//IST = UTC + 5:30
//in js the date object stores time as a UTC timestamp internally
//timestamp in milli secs since Jan 1, 1970

let d1 = new Date()
let d2 = new Date('2022-01-12')
let d3 = new Date(2022,0,12) //here 0 means january
let d4 = new Date(Date.now())
console.log(d4.toDateString())
console.log(d3.toString())
console.log(d2)
console.log(d1) //ISO
console.log(d1.toString())
console.log(Date.now()) // timestamp 

let d5 = new Date(2022,0) 
console.log(d5) // assumes date as the first of the month
let d6 = new Date(2022,1,0)
console.log(d6) // automatically goes the previous date of previous month

//methods
//getMonth() -> 0 to 11
//getDay() -> day of the week (0-6,Sun-Sat)
//getHours() -> 0 to 23
console.log(d1.getFullYear())
console.log(d2.getDate())
console.log(d2.getTime()) // timestamp returns the local time only

console.log(d5.setFullYear(2024))
console.log(d3.setMinutes(13)) // 0 - 59
