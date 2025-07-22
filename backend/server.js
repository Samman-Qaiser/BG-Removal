// server.js or index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import UserRouter from './routes/userRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use('/api/user', UserRouter);

app.get('/', (req, res) => {
  res.send('API is working fine');
});

// ✅ Proper async function to start server
const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1); // exit if error
  }
};

startServer();

export default app;
