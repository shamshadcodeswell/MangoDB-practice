import 'dotenv/config'
import connectDB from "./db/index.js";
import express from 'express'
const app = express()

;(async ()=>{
    await connectDB()
    app.listen(process.env.PORT,()=>{
        console.log(`server started listening on ${process.env.PORT} !!`);
        
    })
})()






