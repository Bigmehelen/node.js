import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { createShortUrl } from "./controllers/UrlController.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

  app.use("/api/create_short_url", (req, res) => {
    console.log(req.body.originalUrl);
    createShortUrl(req, res)});

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to URL Shortener Service");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
