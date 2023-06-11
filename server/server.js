import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// routes
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

// error
import { notFound, errorhandler } from "./middleware/errorMiddleware.js";

// .env configuration
dotenv.config();
const port = process.env.port || 5000;

connectDB();

const app = express();

// middlemen
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/api/user", userRoutes);

// error handler
app.use(notFound);
app.use(errorhandler);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});