import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'

export const productApp = exp();

//product api routes

//create product
productApp.post('/products',async (req,res)=>{
    //get body from the request
    let newProduct = req.body
    //create product document
    let newProductDoc = await ProductModel(newProduct)
    //save it to db
    await newProductDoc.save()
    //send res
    res.status(201).json({message:"product created"})
})
//read product
productApp.get('/products',async (req,res)=>{
    //get the products
    let productList = await ProductModel.find()
    //send res
    res.status(200).json({message:"all products",payload:productList})
})
//read product by id
productApp.get('/products/:id',async (req,res)=>{
    //get ObjectId/pid from the req
    let reqId = req.params.id;
    //find the product with reqId
    let foundProduct = await ProductModel.findById(reqId);
    //find by pid
    //let foundByPid = await ProductModel.
    //send res
    res.status(200).json({message:"product found!",payload:foundProduct})
})
//update product by id
productApp.put('/products/:id',async (req,res)=>{
    //get id from the req
    let reqId = req.params.id
    //get the product from body
    let modifiedProduct = req.body
    //find and update
    let updatedProduct = await ProductModel.findByIdAndUpdate(reqId,{$set:{...modifiedProduct}},{new:true})
    //send res
    res.status(200).json({message:"updated product",payload:updatedProduct})
})