import exp from 'express'
import { ProductModel } from '../models/ProductModel.js';

export const productApp = exp();


//create products route
productApp.post("/products",async(req,res)=>{
    //get the product from req
    let prodObj=req.body
    //create a document
    let prodDocument = new ProductModel(prodObj)
    //save it to database
    await prodDocument.save()
    //send res
    res.status(201).json({message:"product created!"})
})

//get the products route
productApp.get('/products',async(req,res)=>{
    //get the products
    let productList = await ProductModel.find()
    //send res
    res.status(200).json({message:"all products",payload:productList})
})

