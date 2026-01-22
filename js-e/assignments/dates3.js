//assignment - 3
let dateOfBirth = new Date("2000-05-15")
let currDate3 = new Date()
let birthYear = dateOfBirth.getFullYear()
let currYear1 = currDate3.getFullYear()

let age = (currYear1 - birthYear)

if(currDate3.getMonth() < dateOfBirth.getMonth() || currDate3.getMonth() === dateOfBirth.getMonth() && currDate3.getDate() < dateOfBirth.getDate())
    age -= 1
console.log("age is : ",age)