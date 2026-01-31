//create mini express server
import exp from 'express'
import { UserModel} from '../models/UserModel.js'

export const userApp = exp();

//User API routes

//create user
userApp.post('/users',async (req,res)=>{
    //get user obj from req body
    let newUser = req.body;
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"user created"})
})

//read user
userApp.get('/users',async (req,res)=>{
    //read users from db
    let usersList = await UserModel.find()
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
