import {Schema, model} from 'mongoose'

//create user schema
const userSchema = new Schema({
    username:{
        type:String,
        required:[true, 'username is required'],
        minLength: [4, 'minimum length of username is 4 characters'],
        maxLength: [20, 'maximum length of username exceeded'],
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    age:{
        type:Number,
        required:[true, 'age is required'],
        min : [18, 'minimum age is 18'],
        max : [25, 'maximum age exceeded']
    }
},{
    strict:"throw", //if any extra fields are sent in req body, throw an error
    timestamps:true //attach two extra fields: createdAt and updatedAt
});

//create user model with the schema
export const UserModel = model('user',userSchema)//the name of the collection is 'users' (mongoose automatically pluralizes the model name)