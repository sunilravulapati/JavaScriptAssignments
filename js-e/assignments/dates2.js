//assignment - 2 part 1
let enrollmentDeadline = new Date("2026-01-20");
let currDate1 = new Date()

if(currDate1 < enrollmentDeadline){
    console.log("enorllment is open")
}
else{
    console.log("enrollment is closed")
}

//assignment - 2 part 2
let givenDate = new Date("2026-02-30")
let currDate2 = new Date()
if(currDate2 === givenDate)
    console.log("date is valid")
else
    console.log("date is invalid")
