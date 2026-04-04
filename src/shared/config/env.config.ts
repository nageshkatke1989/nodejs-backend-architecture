import dotenv from "dotenv";

// Initialize once here
dotenv.config();

// Export as guaranteed strings (using ! to fix the TS error)
export const MONGO_URI = process.env.MONGO_URI!;
export const POSTGRES_URL = process.env.POSTGRES_URL!;
export const PORT = process.env.PORT!;

// Optional: Add a quick check to crash early if variables are missing
if (!PORT || !MONGO_URI || !POSTGRES_URL) {
    throw new Error("❌ Missing environment variables in .env file");
}
