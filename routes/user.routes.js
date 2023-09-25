import { Router } from "express";

import { userService, authService } from "../services";
import { errorHandler } from "../utils";

const userRouter = Router();

userRouter.get("/whoami", (req, res) => {
  res.send("sdfsdf");
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
