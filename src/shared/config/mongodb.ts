import mongoose from "mongoose";
import { MONGO_URI } from "./env.config";

export const connectMongo = async() => {
    await mongoose.connect(MONGO_URI!);
    console.log("MongoDB Connected");
};