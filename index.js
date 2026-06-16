






/*import 'dotenv/config'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import express from 'express'
const app = express()

;(async()=>{
    try {
        console.log(process.env.MONGODB_URI, "  ",DB_NAME);
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on('error',(error)=>{
            console.log(" ERROR! app cant access the database ",error);           
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App started listening to port ${process.env.PORT}`);   
        })
    } catch (error) {
        console.log("Error in connecting to the database", error)
    }
})()*/