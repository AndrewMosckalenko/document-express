import express from "express";
import dotenv from "dotenv";

import { userRouter, documentRouter } from "./routes";
import { createPgPool } from "./db/postgres";

const app = express();
dotenv.config();
createPgPool();

const port = Number(process.env.BACKEND_PORT) || 5000;

app.use("/api/user", userRouter);
app.use("/api/document", documentRouter);

app.listen(port, () => {
  console.log("http://localhost:5000");
});
