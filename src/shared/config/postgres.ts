import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { POSTGRES_URL } from "./env.config"; // Path to your env config

// 1. Create the connection pool using your URL
const pool = new Pool({ connectionString: POSTGRES_URL });

// 2. Setup the Adapter
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to Prisma
export const prisma = new PrismaClient({
    adapter,
    log: ["query", "info", "warn", "error"], // 👈 ADD THIS 
});
