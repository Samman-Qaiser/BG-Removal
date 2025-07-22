// mongodb.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
 mongoose.connection.on('connected',()=>{
  console.log('database connected')

 })
 await mongoose.connect(process.env.URI)
};

export default connectDB;
