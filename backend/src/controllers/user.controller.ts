import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../models/User";
import { hashPassword } from "../utils/bcryptUtils";
import { getUserIdByToken } from "../utils/jwtAuth";
import { ServiceRequest } from "../models/ServiceRequest";
import { uploadFile } from "../utils/fileUploadUtils";

export class UserController {
  public static async createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    try {
      newUser.password = await hashPassword(newUser.password);

      const createdUser = await UserService.createUser(newUser);

      const { password, create_time, ...dtoUser } = createdUser;

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
      let newRequest: ServiceRequest = req.body;
      
      if (token) {
        const userId = getUserIdByToken(token);
        const providerId = req.params.providerId;
        await UserService.requestProvider(newRequest, userId, providerId);
        return res
          .status(200)
          .json({ message: "Cuidador Solicitado com sucesso!" });
      }
    } catch (error: any) {
      return res.status(500).json({ message: "Erro ao solicitar cuidador." });
    }
  }
  
  public static async deleteRequest(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      
      if (token) {
        const requestId = req.params.requestId;
        await UserService.deleteRequest(requestId);
        return res
          .status(200)
          .json({ message: "Requisicao deletada com sucesso!" });
      }
    } catch (error: any) {
      return res.status(500).json({ message: "Erro ao deletar a requisicao de cuidador." });
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

  public static async getUserRequests(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const userId = getUserIdByToken(token);
        const userRequests = await UserService.getUserRequests(userId);
        return res.status(200).json(userRequests);
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar solicitações." });
    }
  }

  public static async getUserRequest(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const requestId = req.params.requestid;
      if (token && requestId) {
        const userId = getUserIdByToken(token);
        const userRequest = await UserService.getUserRequest(userId, requestId);
        return res.status(200).json(userRequest);
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar solicitação." });
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
        res.status(200).json(dtoUser);
      } else {
        res.status(404).json({ message: "Usuário não encontrado." });
      }
    } catch (error: any) {
      if (error.message === "Token inválido para este usuário.") {
        return res.status(403).json({ message: "Usuário não autorizado." });
      }
    }
  }
}
