import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { userRouter, documentRouter } from "./routes";
import { createPgPool } from "./db/postgres";
import { authMiddleware } from "./middlewares/auth.middlewares";

const app = express();
const port = Number(process.env.BACKEND_PORT) || 5000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

app.use("/api/user", urlencodedParser, userRouter);
app.use("/api/document", urlencodedParser, authMiddleware, documentRouter);

dotenv.config();

(async () => {
  await createPgPool();
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/api`);
  });
})();
