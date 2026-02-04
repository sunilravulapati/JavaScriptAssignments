import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    productName:{
        type:String,
        required:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    brand:{
        type:String,
        required:[true,"required: brand"]
    }
},{
    strict:"throw",
    timestamps:true
})

export const ProductModel = model("ecomDB",productSchema)