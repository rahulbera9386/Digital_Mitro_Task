import express from "express";
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"
import dbConnection from "./database/dbConnection.js";

const app=express();
const port=process.env.PORT || 9090;
dotenv.config({});

const corsOptions={
    origin:[
        process.env.USER_FRONTEND_URL
    ],
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Contendt-Type","Authorization"],
    credentials:true
}
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"))



app.listen(port,()=>{
    console.log(`Server is running successfully on port:${port}`);
    dbConnection()
})