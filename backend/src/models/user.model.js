import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:user
    }
})


const UserModel=mongoose.model(userSchema);
export default UserModel;