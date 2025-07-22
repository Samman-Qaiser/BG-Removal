import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import UserRouter from './routes/userRouter.js'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}))
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }));

// ✅ Then your other routes
app.use(express.json()); // JSON parser after raw for other routes

app.use('/api/user', UserRouter);

const PORT = process.env.PORT || 3000
mongoose.connect(process.env.URI)
  .then(() => {
    console.log('database connected successfully')
    app.listen(PORT, () => {
      console.log('server started successfully')
    })
  })
  .catch((error) => {
    console.log(`ERROR ${error}`)
  })

export default app