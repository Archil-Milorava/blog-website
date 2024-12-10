import express, { json } from "express";
import "dotenv/config";

import blogRouter from "./routes/blogs/blog.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1",blogRouter);

export default app;
