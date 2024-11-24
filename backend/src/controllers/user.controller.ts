import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../models/User";
import { hashPassword } from "../utils/bcryptUtils";
import { getUserIdByToken } from "../utils/jwtAuth";

export class UserController {
  public static async createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    try {
      newUser.password = await hashPassword(newUser.password);

      const createdUser = await UserService.createUser(newUser);

      const { password, ...dtoUser } = createdUser;

      return res.status(201).json(dtoUser);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro interno ao criar usuário." });
    }
  }

  public static async favoriteProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let user;
      if (token) {
        const userId = getUserIdByToken(token);
        const providerId = req.params.providerId;
        await UserService.favoriteProvider(userId, providerId);
        return res
          .status(200)
          .json({ message: "Cuidador favoritado com sucesso!" });
      }
    } catch (error: any) {
      return res.status(500).json({ message: "Erro ao favoritar cuidador." });
    }
  }

  public static async unfavoriteProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const userId = getUserIdByToken(token);
        const providerId = req.params.providerId;
        await UserService.unfavoriteProvider(userId, providerId);
        return res
          .status(200)
          .json({ message: "Cuidador desfavoritado com sucesso!" });
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao desfavoritar cuidador." });
    }
  }

  public static async requestProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const userId = getUserIdByToken(token);
        const providerId = req.params.providerId;
        await UserService.requestProvider(userId, providerId);
        return res
          .status(200)
          .json({ message: "Cuidador Solicitado com sucesso!" });
      }
    } catch (error: any) {
      return res.status(500).json({ message: "Erro ao solicitar cuidador." });
    }
  }

  public static async getFavoritedProviders(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const userId = getUserIdByToken(token);
        const favoritedProviders = await UserService.getFavoritedProviders(
          userId
        );
        return res.status(200).json(favoritedProviders);
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar cuidadores favoritos." });
    }
  }

  public static async getUserInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let user;
      if (token) {
        const userId = getUserIdByToken(token);
        user = await UserService.getUserById(userId);
      }
      if (user) {
        const { password, ...dtoUser } = user;
        res.json(dtoUser);
      } else {
        res.status(204).json({ message: "Usuário não encontrado." });
      }
    } catch (error: any) {
      if (error.message === "Token inválido para este usuário.") {
        return res.status(403).json({ message: "Usuário não autorizado." });
      }
    }
  }
}
