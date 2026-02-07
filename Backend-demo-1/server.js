//create http server
//import express
import exp from 'express'
import { userApp } from './apis/UserAPI.js'
import { productApp } from './apis/ProductAPI.js'
//create server
const app = exp()
//assign port number
app.listen(3000,()=>console.log('HTTP Server listening on port 3000'))

//body parsing middleware
app.use(exp.json()) //this will parse json data in request body, without this req.body is always undefined and the put and delete methods will not work

//custom middlewares
// function middleware1(req,res,next){ //next is for forwarding the request to the next
//     //receive a request,handle and send responses
//     console.log("middleware1 executed")
    
//     //send response
//     //res.json({message:"response from middleware1"})
    
//     //forward the request to next middleware
//     next()
// }

// function middleware2(req,res,next){
//     console.log("middleware2 executed")
//     next()
// }

// //if we want a middleware to be used only by a certain one then send it as a parameter to that route
// //ex: app.get('/users',middleware2,(req,res)=>{})

// //if we want them to be executed one middleware after another then
// //ex: app.get('/users',middleware1,middleware2,(req,res)=>{})

// //to execute for every incoming request
// //app.use(middleware2)
// //app.use(middleware1)

//forward req to userApp when path starts with /user-api
app.use('/user-api',userApp)

//forward req to productApp when path starts with /product-api
app.use('/product-api',productApp)
