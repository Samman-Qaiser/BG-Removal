import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
const app=express()
dotenv.config()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hi')
})
const PORT=process.env.PORT||3000
mongoose.connect(process.env.URI)
.then(()=>{
    console.log('database connected successfully')
    app.listen(PORT,()=>{
    console.log('server started successfully')
})
})
.catch((error)=>{
    console.log(`ERROR ${error}`)
})