import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import driverRoutes from './routes/driverRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    connect();
});
