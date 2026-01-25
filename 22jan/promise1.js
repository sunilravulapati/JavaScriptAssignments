//scenario: sai sri ram promised rohit that he will treat him for his birthday

console.log("Sai Sri Ram called rohit that he will treat him for his birthday")
console.log("rohit is waiting for sai sri ram:")
let statusPromise = false
let promiseObj = new Promise((fulfill,reject) => {
    setTimeout(()=>{
        statusPromise === true ? fulfill("Rohit said thank you to sai sri ram") : reject("sai sri ram didnt give a treat to rohit")
    },4000)
})

promiseObj
.then((msg)=>console.log("Promise Fulfilled: ",msg))
.catch((msg)=>console.log("Promise Rejected: ",msg))