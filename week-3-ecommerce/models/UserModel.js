import {Schema,model} from 'mongoose'

// const cartSchema = new Schema({
//     product:{
//         type:Schema.Types.ObjectId, //refers to the id of the product but doesnt know its internal structure
//         ref: "ecomDB" //name of the product model
//     }
// })
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"ecomDB"
    },
    quantity:{
        type:Number,
        default:1,
    }
})

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,'duplicate user!'] //not a validator but only an option/helper, add to index
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[4,"min length is 4"]
    },
    cart:{
        type:[cartSchema] //here we will not store the product object but we will store the id which will be the reference of the product object
    }
},{
    strict:"throw",
    timestamps:true
})

export const UserModel = model('eUser',userSchema)