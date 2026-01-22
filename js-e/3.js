//difference between two dates
let date1 = new Date(2020,9,17)
let date2 = new Date(2018,0,11)

if(date1 > date2){
    [date1,date2] = [date2,date1]
}

let years = date2.getFullYear() - date1.getFullYear()
console.log(years)

let months = date2.getMonth() - date1.getMonth()
console.log(months)

let days = date2.getDate() - date1.getDate()
console.log(days)

if(months < 0){
    years -=1
    months+=12
}
if(days < 0){
    months-=1
    // get no. of days of previous month of date2
    //add those days
}
console.log(months)