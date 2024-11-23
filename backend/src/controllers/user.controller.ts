import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../models/User";
import { verifyToken } from "../utils/jwtAuth";
import { hashPassword } from "../utils/bcryptUtils";


export class UserController {

  public static async createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    try {
      newUser.password = await hashPassword(newUser.password);

      const createdUser = await UserService.createUser(newUser);

      const { password, ...dtoUser } = createdUser;

      return res.status(201).json(dtoUser);
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ message: "Este e-mail já está em uso." });
      } else {
        console.error("Erro ao criar usuário:", error);
        return res.status(500).json({ message: "Erro interno ao criar usuário." });
      }
    }
  }
}