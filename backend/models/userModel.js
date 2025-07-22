import mongoose from 'mongoose'
const UserSchema=mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    
        email:{
            type:String,
            required:true,  unique:true
        }
        ,photo:{type:String,required:true},
        firstName:{type:String},
         LastName:{type:String},
         creditBalance:{type:Number,default:5}

    
})
const UserModel=mongoose.model('userModel',UserSchema)
export default UserModel