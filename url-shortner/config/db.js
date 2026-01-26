import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    
    const connString = process.env.MONGO_URI 
    
    await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 10000, 
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
