import {PoolClient } from "pg";
import { User } from "../models/User";
import { connection } from "../database/config";

export class LoginService {
    
  public static async authenticateLogin(email: string): Promise<User | null> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = 'SELECT * FROM users WHERE email = $1';
      const { rows } = await client.query(sqlStatement, [email]);

      if (rows.length > 0) {
        return rows[0] as User;
      }

      return null;
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      throw error;
    } finally {
      client.release();
    }
}
}