import mongoose from "mongoose";
import createServer from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3500;

const app = createServer();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
