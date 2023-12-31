import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUiExpress from "swagger-ui-express";
import fileUpload from "express-fileupload";

import { userRouter, documentRouter } from "./routes";
import { createPgPool } from "./db/postgres";
import { authMiddleware, errorHandlerMiddleWare } from "./middlewares";
import { swaggerDocs } from "./api-doc";

const app = express();
const port = Number(process.env.BACKEND_PORT) || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

app.use("/api/user", userRouter);
app.use("/api/document", authMiddleware, documentRouter);

app.use(errorHandlerMiddleWare);

dotenv.config();

(async () => {
  await createPgPool();
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/api`);
  });
})();
