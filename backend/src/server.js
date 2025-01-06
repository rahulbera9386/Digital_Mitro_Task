import express from "express";
import dotenv from "dotenv"

const app=express();
const port=process.env.PORT || 9090;
dotenv.config({})



app.listen(port,()=>{
    console.log(`Server is running successfully on port:${port}`)
})