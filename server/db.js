import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

export const pool = new Pool({
    user: process.env.PGADMIN_USER,
    host: process.env.PGADMIN_HOST,
    database: process.env.PGADMIN_DB,
    password: process.env.PGADMIN_PASSWORD,
    port: 5432,
});
