import { Router } from "express";

const userRouter = Router();

userRouter.get("/whoami", (req, res) => {
  res.send("sdfsdf");
});

userRouter.post("/sign-in", (req, res) => {
  res.send(1);
});

userRouter.post("/sign-up", (req, res) => {
  res.send(1);
});

export { userRouter };
