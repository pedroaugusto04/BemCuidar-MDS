import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

//userRouter.use(authenticateMiddleware)

/**
 * @openapi
 * '/users':
 *  post:
 *     tags:
 *     - Users Controller
 *     summary: Criar usuario
 *     responses:
 *      201:
 *        description: Usuario criado.
 *      500:
 *        description: Erro interno ao criar usuário.
 */
userRouter.post("/users", UserController.createUser);

/**
 * @openapi
 * '/users/providers/:providerId':
 *  post:
 *     tags:
 *     - Users Controller
 *     summary: Adicionar cuidador aos favoritos
 *     responses:
 *      200:
 *        description: Cuidador favoritado com sucesso!
 *      500:
 *        description: Erro ao favoritar cuidador.
 */
userRouter.post(
  "/users/providers/:providerId",
  UserController.favoriteProvider
);

/**
 * @openapi
 * '/users/request/providers/:providerId':
 *  post:
 *     tags:
 *     - Users Controller
 *     summary: Solicitar cuidador
 *     responses:
 *      200:
 *        description: Cuidador Solicitado com sucesso!
 *      500:
 *        description: Erro ao solicitar cuidador.
 */
userRouter.post(
  "/users/requests/:providerId",
  UserController.requestProvider
);

userRouter.delete(
  "/users/requests/:requestId",
  UserController.deleteRequest
);

/**
 * @openapi
 * '/users/providers/:providerId':
 *  delete:
 *     tags:
 *     - Users Controller
 *     summary: Remover cuidador dos favoritos
 *     responses:
 *      200:
 *        description: Cuidador desfavoritado com sucesso!
 *      500:
 *        description: Erro ao desfavoritar cuidador.
 */
userRouter.delete(
  "/users/providers/:providerId",
  UserController.unfavoriteProvider
);

/**
 * @openapi
 * '/users/providers':
 *  get:
 *     tags:
 *     - Users Controller
 *     summary: Listar cuidadores nos favoritos
 *     responses:
 *      200:
 *        description: Lista de cuidadores
 *      500:
 *        description: Erro ao buscar cuidadores favoritos.
 */
userRouter.get("/users/providers", UserController.getFavoritedProviders);

/**
 * @openapi
 * '/users/requests':
 *  get:
 *     tags:
 *     - Users Controller
 *     summary: Listar pedidos
 *     responses:
 *      200:
 *        description: Lista de pedidos
 *      500:
 *        description: Erro ao buscar solicitações.
 */
userRouter.get("/users/requests", UserController.getUserRequests);

userRouter.get("/users/requests/:requestid", UserController.getUserRequest);

/**
 * @openapi
 * '/users/info':
 *  get:
 *     tags:
 *     - Users Controller
 *     summary: Informação sobre o usuário
 *     responses:
 *      200:
 *        description: Informação do usuário
 *      404:
 *        description: Usuário não encontrado.
 *      403:
 *        description: Usuário não autorizado.
 */
userRouter.get("/users/info", UserController.getUserInfo);

export { userRouter };
