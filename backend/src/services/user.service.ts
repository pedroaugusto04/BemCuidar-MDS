import { PoolClient, QueryResult } from "pg";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../database/config";
import { ServiceProvider } from "../models/ServiceProvider";

export class UserService {
  public static async getUsers(): Promise<User[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT * FROM users";
      const result: QueryResult = await client.query(sqlStatement);
      return result.rows as User[];
    } finally {
      client.release();
    }
  }

  public static async getUserById(id: string): Promise<User | null> {
    const client: PoolClient = await connection.connect();

    try {
      const sqlStatement = "SELECT * FROM users WHERE id = $1";
      const { rows } = await client.query(sqlStatement, [id]);

      if (rows.length === 1) {
        return rows[0] as User;
      }
      return null;
    } finally {
      client.release();
    }
  }

  public static async createUser(newUser: User): Promise<User> {
    let client: PoolClient | null = null;
    try {
      client = await connection.connect();
      const id = uuidv4();
      const sqlStatement =
        "INSERT INTO users (id, name, last_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const values = [
        id,
        newUser.name,
        newUser.last_name,
        newUser.email,
        newUser.password,
      ];

      const { rows } = await client.query(sqlStatement, values);

      return rows[0] as User;
    } catch (e) {
      console.error("Error creating user:", e);
      throw e;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  public static async favoriteProvider(
    userId: string,
    providerId: string
  ): Promise<void> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "INSERT INTO user_favorites_service_providers (id_user,id_provider) VALUES ($1,$2) RETURNING *";

      const values = [userId, providerId];

      await client.query(sqlStatement, values);
    } finally {
      client.release();
    }
  }

  public static async unfavoriteProvider(
    userId: string,
    providerId: string
  ): Promise<void> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "DELETE FROM user_favorites_service_providers WHERE id_user = $1 AND id_provider = $2";

      const values = [userId, providerId];

      await client.query(sqlStatement, values);
    } finally {
      client.release();
    }
  }

  public static async requestProvider(
    userId: string,
    providerId: string
  ): Promise<void> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "INSERT INTO user_requests_service_providers (id_user,id_provider) VALUES ($1,$2) RETURNING *";

      const values = [userId, providerId];

      await client.query(sqlStatement, values);
    } finally {
      client.release();
    }
  }

  public static async getFavoritedProviders(
    userId: string
  ): Promise<ServiceProvider[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "SELECT * FROM service_providers p JOIN user_favorites_service_providers f  ON p.id = f.id_provider WHERE f.id_user = $1";

      const values = [userId];

      const result: QueryResult = await client.query(sqlStatement, values);

      return result.rows as ServiceProvider[];
    } finally {
      client.release();
    }
  }

  public static async getFavoritedProvidersId(
    userId: string
  ): Promise<string[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "SELECT p.id FROM service_providers p JOIN user_favorites_service_providers f  ON p.id = f.id_provider WHERE f.id_user = $1";

      const values = [userId];

      const result: QueryResult = await client.query(sqlStatement, values);

      const favoritedProviderIds: string[] = result.rows.map((row) => row.id);

      return favoritedProviderIds;
    } finally {
      client.release();
    }
  }
}
