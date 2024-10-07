import express from "express";
import userRoute from './routes/user.js';
import { connectDB } from "./utils/features.js" ;
import dotenv from 'dotenv';

// import { Server } from "socket.io";

// import {createServer} from "http";
// import cors from "cors"
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";

dotenv.config({
   path:"./.env",
});


// const server= new createServer(app); 
const mongoURI = process.env.MONGO_URI;
const port =process.env.PORT || 3000;

connectDB(mongoURI);

const app= express();
// Using middleware  here
app.use(express.json());
app.use(express.urlencoded());

app.use("/user",userRoute);

 app.get( "/" , (req, res)=>{
    res.send("Hello World!");
 }); 


app.listen(port, ( ) => {
    console. log(`Server is running on ${port}` );
});

 