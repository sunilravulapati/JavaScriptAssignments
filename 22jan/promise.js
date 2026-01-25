//scenario: ravi promised kiran that he will call him after 10 minutes

let futureAvailability = false
//create promise(Kiran)
let promiseObj = new Promise((fulfill,reject) => { // here a represents fulfilled state and b represents rejected state
    //business logic
    setTimeout(()=>{
        futureAvailability === true?fulfill("hello kiran how are you") : reject("Sorry i will call you later")
    },5000)
})
//after the 5 secs based on the state then and catch methods will be called based on the futureAvailability

//consume promise(Ravi)
//old method
promiseObj.
then((msg)=>console.log("message: ",msg))// then() is called when it is fulfilled
.catch((msg)=>{console.log("error: ",msg)}) // is called when it is rejected

//modern syntax
// async function consumePromise() {
//     let res = await promiseObj()
//     console.log(res)
// }


console.log(21)