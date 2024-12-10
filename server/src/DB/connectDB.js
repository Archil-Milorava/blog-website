import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to db");
  } catch (error) {
    console.log("failed to connect to DB", error);
    process.exit(1);
  }
};

export default connectDB
