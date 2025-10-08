import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 3000;


const app =  express();




app.listen(PORT,()=>{
    connectDb(); //connect to database
    console.log(`Server is running on port ${PORT}`);
})





















app