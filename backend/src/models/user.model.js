import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
   password:{
    type:String

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})


const UserModel=mongoose.model("user",userSchema);
export default UserModel;