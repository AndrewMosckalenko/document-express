import express from "express";
import { userRouter, documentRouter } from "./routes/index";

const app = express();

const port = 5000;

app.use("/api/user", userRouter);
app.use("/api/document", documentRouter);

app.listen(port, () => {
  console.log("http://localhost:5000");
});
