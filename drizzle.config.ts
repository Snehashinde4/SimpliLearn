import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

// Parse the connection string to extract individual parameters
const connectionString = process.env.DATABASE_URL!;
const url = new URL(connectionString);

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: url.hostname,
    port: parseInt(url.port || "5432"),
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
    ssl: url.searchParams.get("sslmode") === "require"
  },
});