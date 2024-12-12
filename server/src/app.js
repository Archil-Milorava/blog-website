import express, { json } from "express";
import "dotenv/config";
import cors from "cors";

import blogRouter from "./routes/blogs/blog.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/v1", blogRouter);

export default app;
