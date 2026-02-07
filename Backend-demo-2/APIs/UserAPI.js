//create mini express server
import exp from 'express'
import { UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyToken.js'

export const userApp = exp();

//User API routes

//create user
userApp.post('/users',async (req,res)=>{
    //get user obj from req body
    let newUser = req.body;
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //hash password
    let hashedPassword = await hash(req.body.password,12)
    //replace the password
    newUserDoc.password = hashedPassword
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"user created"})
})

//user authentication route
userApp.post('/auth', async (req,res)=>{
    //get user credentials from req body
    let userCred = req.body;
    //check username
    let userDB = await UserModel.findOne({username:userCred.username})
    //if username not found
    if(userDB===null){
        return res.status(404).json({message:"invalid username"})
    }
    //compare the passwords
    let passMatch = await compare(userCred.password, userDB.password)
    //if password not matched
    if(passMatch===false){
        return res.status(404).json({message:"invalid password"})
    }
    //create signed tokens
    let signedToken = jwt.sign({username:userCred.username}, // payload: the payload should be as small as possible
        'secret', //secret key - useful when we want to verify the token
        {expiresIn:20}) // expiration time in seconds
    //save token as httpOnly cookie in res
    res.cookie('token',signedToken,{
        httpOnly:true, // it is now httpOnly cookie not, not accessible to the js of the browser
        secure:false, // in http we set it to false, in https we set it to true
        sameSite:"lax" // lax - relax,none- no restriction,strict - restrictions are there
    })
    //send token in response
    res.status(200).json({message:"login successful"})
})


//read user
userApp.get('/users',async (req,res)=>{
    //read users from db
    let usersList = await UserModel.find()
    res.status(200).json({message:"users",payload:usersList})
})

//read user: projection
userApp.get('/user',async (req,res)=>{
    //read users from db
    let usersList = await UserModel.find({}, {username:1,_id:0,age:1})
    res.status(200).json({message:"users",payload:usersList})
})

//read user by ObjectId
userApp.get('/users/:id',async (req,res)=>{
    //get ObjectId from req params
    let objId = req.params.id;
    //find user in db
    let userObj = await UserModel.findById(objId)
    //send response
    res.status(200).json({message:"user found",payload:userObj})
})

//update user
userApp.put('/users/:id',async (req,res)=>{
    //get ObjectId from req params
    let objId = req.params.id
    //get modified user from req
    let modifiedUser = req.body;
    //make updates
    let updatedUser = await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true,runValidators:true} // if we add runValidators:true, it will run the validators defined in schema while updating the document
    )
    //send res
    res.status(200).json({message:"user updated",payload:updatedUser})
})

//delete user
userApp.delete('/users/:id',async (req,res)=>{
    //get objectId from req params
    let objId = req.params.id
    //delete user from db
    let deletedUser = await UserModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"user deleted from db",payload:deletedUser})
})

//test route(protected route)
userApp.get('/test',verifyToken,(req,res)=>{
    res.json({message:"test route"})
})