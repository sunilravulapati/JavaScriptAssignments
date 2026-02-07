import exp from 'express'
//create a mini express app - separate router
export const userApp = exp.Router()
//test data stored in local memory
let users = []

//get request handling route
userApp.get('/users',(req,res)=>{
    //send users data as response
    res.status(200).json({message:"all users",payload:users})//message,payload
})

//post request handling route
userApp.post('/users',(req,res)=>{
    //get user resource from request
    let newUser = req.body
    //console.log("new user: ",newUser)
    //insert new user to users array
    users.push(newUser)

    //send response
    res.status(201).json({message:"user created"})
})

//put request handling route
userApp.put('/users',(req,res)=>{
    //get modified user from request
    let modifiedUser = req.body
    //find the user if it exists in the array
    let userIndex = users.findIndex(u=>u.id === modifiedUser.id)
    //if user not found then respond with user not found
    if(userIndex === -1){
        return res.status(404).json({message:"user not found!"})
    }
    //if user found then update the user
    
    // user.name = modifiedUser.name
    // user.age = modifiedUser.age
    users.splice(userIndex,1,modifiedUser)//splice method returns deleted array of items
    //send response as "User Modified"
    res.status(200).json({message:"User Modified"})
})


//read user by id
userApp.get('/users/:id',(req,res)=>{ // :id is a route/url parameter
    //read id from the url parameter
    let userId = parseInt(req.params.id)  // or Number(req.params.id) -> //this params is going to return an object
    // console.log(userId)
    //read user by this id
    let user = users.find(u=>u.id === userId)
    //if user not found
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //if user found
    res.status(200).json({message:"user found",payload:user} )
})

//delete request handling route
userApp.delete('/users/:id',(req,res)=>{
    let userId = Number(req.params.id)

    //find user index
    let userIndex = users.findIndex(u=>u.id === userId)
    //if user is not found
    if(userIndex === -1){
        return res.status(404).json({message:"user not found"})
    }
    //if user is found then delete the user
    let deletedUser = users.splice(userIndex,1)
    //send response
    res.status(200).json({message:"user deleted",payload:deletedUser})
})
