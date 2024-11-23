import {PoolClient } from "pg";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../database/config";

export class UserService {

  public static async getUserById(id: string): Promise<User | undefined> {
    const client: PoolClient = await connection.connect();

    try {
      const sqlStatement = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await client.query(sqlStatement, [id]);

      if (rows.length === 1) {
        return rows[0] as User;
      }

      return undefined;
    } finally {
      client.release();
    }
  }

  public static async createUser(newUser: User): Promise<User> {
    const client: PoolClient = await connection.connect();

    try {
      const id = uuidv4();
      newUser.id = id;

      const sqlStatement = 'INSERT INTO users (id, name,last_name, email, password) VALUES ($1, $2, $3,$4,$5) RETURNING *';
      const values = [newUser.id, newUser.name,newUser.last_name,newUser.email,newUser.password];
      const { rows } = await client.query(sqlStatement, values);

      return rows[0] as User;
    } finally {
      client.release();
    }
  }
}