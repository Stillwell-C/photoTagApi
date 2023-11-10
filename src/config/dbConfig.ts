const Pool = require("pg").Pool;
import { Pool as PoolType } from "pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_PRIVATE_URL;

const pool: PoolType = new Pool({
  connectionString,
});

export default pool;
