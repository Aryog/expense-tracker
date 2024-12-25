import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./backend/db/schema/expenses.ts",
	out: "./drizzle",
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
});
