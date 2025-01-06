import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config({});

if(!process.env.MONGO_URI)
{
    console.log("Mongo URL not defined")
}




const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to database");

    }
    catch(error)
    {
        console.log(`Error while trying to connect databse,${error}`)
    }
}
export default dbConnection;