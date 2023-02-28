import app from "./index.js";
import dotenv from "dotenv";
dotenv.config();


import connectDB from "./configs/db.js";

const port = process.env.PORT || 8000;


app.listen(port,()=>{
    connectDB();
    console.log('Listening on port',port)
})