import express from "express";
import dotenv from "dotenv"; 


import connectDB from "./utils/dbConnection.js";


import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});

 
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());

const corsOption={
    origin:`http://localhost:${PORT}`,
    credentials:true
};
app.use(cors(corsOption)); 

// connect to database
connectDB();


app.listen(PORT, ()=>{
    console.log(`Server listen at prot ${PORT}`);
});

