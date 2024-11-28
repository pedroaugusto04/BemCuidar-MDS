import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

const loginRouter = Router();

/**
 * @openapi
 * '/login':
 *  post:
 *     tags:
 *     - Login Controller
 *     summary: Fazer login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: email@bemcuidar.com
 *              password:
 *                type: string
 *                default: senhasenhasenha
 *     responses:
 *      200:
 *        description: Login bem-sucedido!
 *      401:
 *        description: Credenciais inválidas.
 *      500:
 *        description: Erro inesperado eu realizar login.
 */
loginRouter.post("/login", LoginController.loginUser);

export { loginRouter };