import exp from 'express';
import { userApp} from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js';
import { connect } from 'mongoose';
const app = exp();
const port = 4000

//entry point of the backend 

//connect to db server
async function connectDB(){
    try{
        let res = await connect('mongodb://localhost:27017/myDB')
        // .then(()=>console.log("connected to db"))
        // .catch((err)=>console.log("error connecting to db: ",err))
        //it returns a promise, we now have to consume the promise by calling then and catch or async and await(write await before every blocking operation)
        app.listen(port, () => console.log("server listening on port 4000..."))
        console.log("success")
    }catch(err){
        console.log("error!", err)
    }
}
connectDB();

//if path starts  with /user-api then forward the request to userApp
app.use(exp.json())
app.use('/user-api', userApp)
app.use('/product-api',productApp)

//error handling middleware
//this will handle all the errors occurred in the app...... this is the default error handler
//keep this at the end of the file always
//write it as a function or arrow function with 4 parameters
function errorHandler(err,req,res,next){
    res.json({message:"error occurred",reason:err.message})
}
app.use(errorHandler)
