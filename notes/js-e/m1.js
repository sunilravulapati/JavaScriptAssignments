//modules
//we can improve the modularity by using this


let a = 100;

//default export
//one module can have only one export default statement
export default a; //this gives the importing module the freedom to pick some other meaningful name to store the data or manipulate it

//named export
//one module can have any number of named export statements
let b = 200; //what ever had been specified the importing module should import that specified only and should use {} 


//when to use named export and default exports
//default export = when the importing module has the freedom to use whatever variable names to do 
//named export = when the importing module has some restriction to use only the particular variable

//whenever a file contains import / export then the file can be said to be a module

//we can export any amount of data
let marks = [90,98]
let address = {
    city : "uppal",
    pincode : 500026
}

export {b,marks,address}

//for node versions < 20.x for a file to be a module then the file should be saved as .mjs
