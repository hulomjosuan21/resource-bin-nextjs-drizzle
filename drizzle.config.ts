import {config} from "dotenv";
import { defineConfig } from 'drizzle-kit';

config({path: ".env"})

export default defineConfig({
    out: './migration',
    schema: './src/db/schemas',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
