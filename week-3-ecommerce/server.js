//create http server
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './apis/userAPI.js'
import { productApp } from './apis/productAPI.js'

const app = exp()
const port = 4000

//connect mongodb database
async function connectDB(){
    try{
        let res = await connect('mongodb://localhost:27017/myDB')
        app.listen(port,()=> console.log("listening on port 4000"))
        console.log("db connection success!")
    }catch(err){
        console.log("error has occured")
    }
}
connectDB()

//use body parser middleware
app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error handler middleware
function errorHandler(err,req,res,next){
    res.json({message:"error occured!",reason:err.message})
}
app.use(errorHandler)