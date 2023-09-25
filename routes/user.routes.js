import { Router } from "express";

import { authService } from "../services";
import { errorHandler } from "../utils";
import { authMiddleware } from "../middlewares/auth.middlewares";

const userRouter = Router();

userRouter.get("/whoami", authMiddleware, (req, res) => {
  res.status(200).send(req.user);
});

userRouter.post("/sign-in", (req, res) => {
  authService
    .signIn(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => errorHandler(res, error));
});

userRouter.post("/sign-up", (req, res) => {
  authService
    .signUp(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => errorHandler(res, error));
});

export { userRouter };
