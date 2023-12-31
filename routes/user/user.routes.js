import { Router } from "express";

import { authService } from "../../services";
import { authMiddleware } from "../../middlewares";

const userRouter = Router();

userRouter.get("/whoami", authMiddleware, (req, res) => {
  res.status(200).send(req.user);
});

userRouter.post("/sign-in", (req, res) => {
  authService.signIn(req.body).then((result) => {
    res.status(200).send(result);
  });
});

userRouter.post("/sign-up", (req, res) => {
  authService.signUp(req.body).then((result) => {
    res.status(200).send(result);
  });
});

export { userRouter };
