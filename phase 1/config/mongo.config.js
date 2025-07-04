import mongoose from 'mongoose'

export const connectDB= async ()=>{
    try{
    const conn= await mongoose.connect(process.env.MONGO_URI);
    console.log(`databse connected on: ${conn.connection.host}`);
    }catch(err){
        console.log(`error message: ${err.message}`);
        process.exit(1);
    }
}