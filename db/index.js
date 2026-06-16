// import 'dotenv/config'
import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected Successfully !! DB HOST : ${connectionInstance}`);
        

    } catch (error) {
        console.log("Couldn't connect to database, Error : ",error);
        process.exit(1)
        
    }
}
export default connectDB