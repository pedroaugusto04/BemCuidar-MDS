import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/users", UserController.createUser);

export { userRouter };
