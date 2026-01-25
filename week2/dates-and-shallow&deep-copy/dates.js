let date = new Date()
let months = ['jan','feb','mar','apr','may','june','jul','aug','sept','oct','nov','dec']
let days = ['sun','mon','tue','wed','thur','fri','sat']
console.log(date.getFullYear())
console.log(months[date.getMonth()])
console.log(date.getDate())
console.log(days[date.getDay()])
console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

let currDate = date.getDate()
let currMonth = months[date.getMonth()]
let currYear = date.getFullYear()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let milliSeconds = date.getMilliseconds()
console.log(currDate + "-" + currMonth + "-" + currYear + " " + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds)
