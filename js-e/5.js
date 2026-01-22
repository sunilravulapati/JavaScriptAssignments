//error handling - catching the error object thrown is error handling
//whenever an error, an errorObject is created and is then thrown...........if the jvm catches the ball then the program is stopped
//issues with errors- whenever an error is detected then the program is stopped abnormally
//if the error comes at compilation then we can correct it
//if the error comes at run time then we can handle it


let a = 10,b=20;
console.log(a)

let x
try{
console.log(x)
}catch(err){ // can be left empty
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}finally{
    console.log("thank you")
}


console.log(b)
console.log("end of the program")