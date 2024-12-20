import { Router } from "express";
import { ServiceProviderController } from "../controllers/service-provider.controller";

const serviceProviderRouter = Router();

//serviceProviderRouter.use(authenticateMiddleware)

/**
 * @openapi
 * '/providers':
 *  get:
 *     tags:
 *     - Providers Controller
 *     summary: Recebe todos os cuidadores
 *     requestHeader:
 *      required: false
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              authorization:
 *                type: string
 *                default: XXXXXXXXX
 *     responses:
 *      200:
 *        description: Lista de todos os cuidadores.
 *      500:
 *        description: Erro ao buscar cuidadores.
 */
serviceProviderRouter.get("/providers", ServiceProviderController.getProviders);

serviceProviderRouter.get("/providers/announcements",ServiceProviderController.getProviderAnnouncements);

/**
 * @openapi
 * '/providers':
 *  post:
 *     tags:
 *     - Providers Controller
 *     summary: Criar cuidador
 *     responses:
 *      201:
 *        description: Cuidador criado.
 *      500:
 *        description: Erro ao registrar cuidador.
 */
serviceProviderRouter.post(
  "/providers",
  ServiceProviderController.createProvider
);

export { serviceProviderRouter };
