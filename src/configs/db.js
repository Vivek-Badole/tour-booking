import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


//Database Conection

mongoose.set("strictQuery",false);
const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       }) 
       console.log('MongoDB database connected');
    } catch (error) {
        console.log('MongoDB database connection failed')
    }
}

export default connectDB;