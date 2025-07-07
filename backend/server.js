import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from  "cors";
import path from "path";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes  from "./routes/authRoutes.js";
import sessionRoutes  from "./routes/sessionRoutes.js";
import questionRoutes  from "./routes/questionRoutes.js";
import { protect }  from "./middlewares/authMiddleware.js";
import { generateInterviewQuestions, generateConceptExplanation } from "./controllers/aiController.js";

const app = express();

// Middleware to handle cors
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

connectDB();
// Middleware 
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/questions', questionRoutes);

app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));