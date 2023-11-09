const Pool = require("pg").Pool;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: "postgres",
  password: process.env.PG_PASS,
  host: "localhost",
  port: 5432,
  database: "photoTag",
});

export default pool;
