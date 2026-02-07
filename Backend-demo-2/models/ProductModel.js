import  {Schema,model} from 'mongoose'

//product schema
const productSchema = new Schema({
    pid:{
        type:Number,
        required:[true,'product id is required']
    },
    productName:{
        type:String,
        required:[true, 'name of the product is required'],
        minLength: [5,'min length of productName is 5']
    },
    price:{
        type: Number,
        required:[true,'price of the product is required'],
        min: [10,'min price is 10'],
        max: [1000,'max price is 1000']
    }
},{
    strict:"throw",
    timestamps:true
})

//create product model with the schema
export const ProductModel = model('product',productSchema)