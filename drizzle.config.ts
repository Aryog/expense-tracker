import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./backend/db/schema/expenses.ts",
	driver: 'pglite',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
});
