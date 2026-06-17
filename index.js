import 'dotenv/config'
import connectDB from "./db/index.js";
import express from 'express'
import userRouter from './routes/users.js'
import userModel from './models/user/user.model.js';


userModel.create({
    name : 'ayush',
    email : 'a14d23@gmail.com',
    occupation : 'lawyer'

})
userModel.create({
    name : 'Himanshu Namdev',
    email : 'himanshunaamdev@gmail.com',
    occupation : 'android dev'

})
const app = express()

app.use(express.json()) 

app.use('/users',userRouter)

app.get('/',(req,res)=>{
    res.send('<h1>hey !</h1>')
})



;(async ()=>{
    await connectDB()
    app.listen(process.env.PORT,()=>{
        console.log(`server started listening on ${process.env.PORT} !!`);
        
    })
})()









