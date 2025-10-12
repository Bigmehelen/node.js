import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export async function connectDB() { 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.error("DB connection error:", err);
  } 
}

