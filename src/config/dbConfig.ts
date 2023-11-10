const Pool = require("pg").Pool;
import { Pool as PoolType } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool: PoolType = new Pool({
  user: "postgres",
  password: process.env.PG_PASS,
  host: "localhost",
  port: 5432,
  database: "photoTag",
});

export default pool;
