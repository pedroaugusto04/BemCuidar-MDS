import { Request, Response } from "express";

export class UserController {
    
  public static async createUser(req: Request, res: Response) {
    try {
      return res.status(200).send("Usuário criado com sucesso!");
    } catch (error) {
      return res.status(500).send("Erro ao criar usuário");
    }
  }

  public static async getAllUsers(req: Request, res: Response) {
    try {
      return res.status(200).send("Usuários retornados com sucesso");
    } catch (error) {
      return res.status(500).send("Erro ao obter usuários");
    }
  }
}