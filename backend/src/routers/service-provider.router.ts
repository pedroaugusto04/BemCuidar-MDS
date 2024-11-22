import { Router } from "express";
import { ServiceProviderController } from "../controllers/service-provider.controller";

const serviceProviderRouter = Router();

//serviceProviderRouter.use(authenticateMiddleware)
serviceProviderRouter.get("/providers", ServiceProviderController.getProviders);
serviceProviderRouter.post(
  "/providers",
  ServiceProviderController.createProvider
);

export { serviceProviderRouter };
