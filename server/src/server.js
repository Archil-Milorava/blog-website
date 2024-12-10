import http from "http";

import connectDB from "./DB/connectDB.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  connectDB();
  console.log(`serverver is running on port ${PORT}`);
});
