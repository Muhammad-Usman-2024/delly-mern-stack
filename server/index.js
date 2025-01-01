import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

// Serve static files from the 'public' folder (images in this case)
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// Connect to the database and start the server
connectDB().then(() => {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log("Database is connected.");
    console.log(`Server is running on port ${port}`);
  });
});
