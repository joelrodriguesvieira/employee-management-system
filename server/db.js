import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: process.env.PGADMIN_USER,
    host: process.env.PGADMIN_HOST,
    database: process.env.PGADMIN_DB,
    password: process.env.PGADMIN_PASSWORD,
    port: 5432,
});
