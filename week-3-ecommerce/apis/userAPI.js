import exp from 'express'
import { UserModel } from '../models/UserModel.js';
import { hash } from 'bcryptjs'
import { Types } from 'mongoose';
import { ProductModel } from '../models/ProductModel.js'

export const userApp = exp.Router()

//create user
userApp.post('/users', async (req, res) => {
    //get user from the body
    let user = req.body
    //run validator for avoiding password trap
    await new UserModel(user).validate() //validate method can be applied on the document......this will invoke all the mongo validators
    //hash the password
    let hashedPassword = await hash(req.body.password, 12)
    //replace the password
    let userDoc = await UserModel(user)
    userDoc.password = hashedPassword
    //save it to db
    await userDoc.save({ validateBeforeSave: false })
    //send the res
    res.status(201).json({ message: "user created" })
})

//add product to the cart
//never send emails to the url parameter
// userApp.put('/user-cart/userid/:uid/productid/:pid', async (req, res) => {
//     //read uid and pid from the url
//     let userId = req.params.uid;
//     let productId = req.params.pid;
//     // console.log("uid:",userId)
//     // console.log("pid:",productId)
//     //find the user
//     let user = await UserModel.findById(userId)
//     if(!user){
//         return res.status(401).json({message:"user not found!"})
//     }
//     //find the product
//     let product = await ProductModel.findById(productId)
//     if(!product){
//         return res.status(401).json({message:"product not found!"})
//     }
//     // console.log("product:",product)
//     //perform the update
//     //we need to push the product-id to the user's cart
//     let modifiedUser = await UserModel.findByIdAndUpdate(
//         userId,
//         {$push:{cart:{product:productId}}},
//         {new:true}
//     ).populate("cart.product","productName price")
//     //send res
//     res.status(200).json({message:"cart is updated!",payload:modifiedUser})
// });

//Add "quantity" field  along with productId in user cart. 
// Set the initial value of "quantity" field is 1 by default. 
// When user adding a product to cart, it should check that product is already there in cart. 
// If it is there , increment count by 1. If product is not there, then add new product to cart with quantity as 1
userApp.put('/user-cart/userid/:uid/productid/:pid', async (req, res) => {
    //read userid and product id from the url
    let { uid, pid } = req.params;
    //check if user exists
    let user = await UserModel.findById(uid)
    if (!user) {
        return res.status(404).json({ message: "user not found!" })
    }
    //check if product exists
    let product = await ProductModel.findById(pid)
    if (!product) {
        return res.status(404).json({ message: "product not found!" })
    }
    //check if the product exists in the cart or not
    console.log("product:",product)
    let existingItem = user.cart.find(i => i.product._id.equals(pid))
    if (existingItem) {
        //increment the quantity
        let modifiedUser = await UserModel.findOneAndUpdate(
            {"cart.product":pid}, //condition
            { $inc: {"cart.$.quantity":1}}, //update
            { new: true }
        ).populate("cart.product", "productName price")
        return res.status(200).json({ message: "product quantity incremented", payload: modifiedUser })
    } else {
        //push new product with quantity 1
        let modifiedUser = await UserModel.findByIdAndUpdate(
            uid,
            { $push: { cart: { product: pid, quantity: 1 } } },
            { new: true }
        ).populate("cart.product", "productName price")
        return res.status(200).json({ message: "product added to the cart!", payload: modifiedUser })
    }
});

//read the user by id
userApp.get('/users/:uid', async (req, res) => {
    //get the user id
    let uid = req.params.uid;
    //get the user
    let user = await UserModel.findById(uid).populate("cart.product", "productName price") // populate:aggregation feature.....used to make like a chain of operations,we need to pass what we have mentioned in the reference
    if (!user) {
        return res.status(401).json({ message: "user not found!" })
    }
    //get the cart details
    res.status(200).json({ message: "user", payload: user })
})