import exp from 'express'
//create a mini express app - separate router
export const productApp = exp.Router()
//products api
let products = []

//get product details
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products",payload:products})
})

//get product by id
productApp.get('/products/:id',(req,res)=>{
    //get product id from url parameter
    let productId = Number(req.params.id)
    //find index of product by id
    let product = products.find(p=>p.id === productId)
    //if product not found
    if(!product){
        return res.status(404).json({message:"product not found"})
    }
    //if product found
    res.status(200).json({message:"product found",payload:product})
})
//get product by brand
productApp.get('/products-brand/:brand',(req,res)=>{
    //get product brand from url parameter
    let productBrand = req.params.brand;
    //find brand
    let product = products.find(p => p.brand === productBrand);
    //if product not found      
    if(!product){
        return res.status(404).json({message:"product brand not found"})
    }
    //if product is found
    res.status(200).json({message:"product brand found",payload:product})
})

//post product details
productApp.post('/products',(req,res)=>{
    //get product from request
    let newProduct = req.body
    //insert the product 
    products.push(newProduct)
    //send response
    res.status(201).json({message:"product created"})
})

//update product details
productApp.put('/products/:id',(req,res)=>{
    //get modified product from request
    let modifiedProduct = req.body
    
    //find the product
    let productIndex = products.findIndex(p=>p.id === modifiedProduct.id)
    
    //if product not found
    if(productIndex === -1){
        return res.status(404).json({message:"product not found"})
    }
    
    //if product is found then update the product
    products.splice(productIndex,1,modifiedProduct)
    res.status(200).json({message:"product modified"})
})

//delete product by id
productApp.delete('/products/:id',(req,res)=>{
    //get product id from url parameter
    let productId = Number(req.params.id)
    //find the product index
    let productIndex = products.findIndex(p=>p.id === productId)
    //if product not found
    if(productIndex === -1){
        return res.status(404).json({message:"product not found"})
    }
    //if product is found then delete the product
    let deletedProduct = products.splice(productIndex,1)
    //send response
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})
