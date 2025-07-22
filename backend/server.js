// index.js or server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import UserRouter from './routes/userRouter.js';

dotenv.config();

const app = express();

// 🧠 Important: Clerk webhook raw parser must be BEFORE any body parsers
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }));

// 🔐 Then apply JSON and cookie parsing middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// 📦 Routes
app.use('/api/user', UserRouter);

// 🚀 DB + Server start
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
  }
};

startServer();

// 🧪 Root route
app.get('/', (req, res) => {
  res.send('API is working');
});

export default app;
