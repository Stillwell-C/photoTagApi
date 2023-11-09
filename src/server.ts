import mongoose from "mongoose";
import createServer from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3500;
// const dbURI: string = process.env.DATABASE_URI!

// const connectDB = async () => {
//     try {
//       await mongoose.connect(dbURI);
//     } catch (err) {
//       console.log(err);
//     }
// };

// connectDB()

const app = createServer();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// mongoose.connection.once('open', () => {
//     console.log('Connected to DB')
//     app.listen(PORT, () => console.log(`Server running on ${PORT}`))
// })
