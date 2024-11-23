import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

//userRouter.use(authenticateMiddleware)
userRouter.post("/users", UserController.createUser);
userRouter.post("/users/providers/:providerId",UserController.favoriteProvider);
userRouter.delete(
  "/users/providers/:providerId",
  UserController.unfavoriteProvider
);
userRouter.get(
  "/users/providers",
  UserController.getFavoritedProviders
);
userRouter.get("/users/info",UserController.getUserInfo);

export { userRouter };
