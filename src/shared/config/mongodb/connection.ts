import mongoose from "mongoose";
import { MONGO_URI } from "../env.config";

export const connectMongo = async () => {
    try {
        await mongoose.connect(MONGO_URI!);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ Mongo connection failed", error);
        process.exit(1);
    }
};