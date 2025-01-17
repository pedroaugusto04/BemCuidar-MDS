import { PoolClient, QueryResult } from "pg";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../database/config";
import { ServiceProvider } from "../models/ServiceProvider";
import { UserRequest } from "../models/UserRequest";
import { ServiceRequest } from "../models/ServiceRequest";

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
        "INSERT INTO user_favorites_service_providers (user_id,provider_id) VALUES ($1,$2) RETURNING *";

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
        "DELETE FROM user_favorites_service_providers WHERE user_id = $1 AND provider_id = $2";

      const values = [userId, providerId];

      await client.query(sqlStatement, values);
    } finally {
      client.release();
    }
  }

  public static async requestProvider(
    newRequest: ServiceRequest,
    userId: string,
    providerId: string
  ): Promise<void> {
    let client: PoolClient | null = null;
    try {
      client = await connection.connect();
      const id = uuidv4();
      const sqlStatement =
        "INSERT INTO user_requests_service_providers (id, user_id, provider_id, req_name,req_address,req_phone, req_city) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *";

      const values = [
        id,
        userId,
        providerId,
        newRequest.req_name,
        newRequest.req_address,
        newRequest.req_phone,
        newRequest.req_city
      ];

      await client.query(sqlStatement, values);
    } catch (e) {
      console.error("Error requesting provider:", e);
      throw e;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  public static async getFavoritedProviders(
    userId: string
  ): Promise<ServiceProvider[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "SELECT * FROM service_providers p JOIN user_favorites_service_providers f  ON p.id = f.provider_id WHERE f.user_id = $1";

      const values = [userId];

      const result: QueryResult = await client.query(sqlStatement, values);

      return result.rows as ServiceProvider[];
    } finally {
      client.release();
    }
  }

  public static async getUserRequests(userId: string): Promise<UserRequest[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "SELECT r.id as req_id,r.create_time as req_create_time,r.status as req_status,r.req_name,r.req_email,r.req_address,r.req_phone,r.req_photo,p.id as prv_id,p.name as prv_name, p.age as prv_age, p.state as prv_state, p.country as prv_country, p.city as prv_city, p.photo as prv_photo, p.service_description as prv_service_description, (SELECT COUNT(user_id) AS prv_favorited FROM user_favorites_service_providers f WHERE r.user_id = f.user_id AND r.provider_id = f.provider_id) as prv_favorited FROM service_providers p JOIN user_requests_service_providers r  ON p.id = r.provider_id WHERE r.user_id = $1";

      const values = [userId];

      const result: QueryResult = await client.query(sqlStatement, values);

      return result.rows as UserRequest[];
    } finally {
      client.release();
    }
  }

  public static async getUserRequest(
    userId: string,
    requestId: string
  ): Promise<UserRequest> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "SELECT r.id as req_id,r.create_time as req_create_time,r.status as req_status,r.req_name,r.req_email,r.req_address,r.req_phone,r.req_photo,p.id as prv_id,p.name as prv_name, p.age as prv_age, p.state as prv_state, p.country as prv_country, p.city as prv_city, p.photo as prv_photo, p.service_description as prv_service_description, (SELECT COUNT(user_id) AS prv_favorited FROM user_favorites_service_providers f WHERE r.user_id = f.user_id AND r.provider_id = f.provider_id) as prv_favorited FROM service_providers p JOIN user_requests_service_providers r  ON p.id = r.provider_id WHERE r.user_id = $1 AND r.id = $2 LIMIT 1";

      const values = [userId, requestId];

      const result: QueryResult = await client.query(sqlStatement, values);

      if(result.rowCount == 0)
        throw new Error("Usuário não possui acesso a este pedido OU o pedido não existe")
      else
        return result.rows[0] as UserRequest;
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
        "SELECT p.id FROM service_providers p JOIN user_favorites_service_providers f  ON p.id = f.provider_id WHERE f.user_id = $1";

      const values = [userId];

      const result: QueryResult = await client.query(sqlStatement, values);

      const favoritedProviderIds: string[] = result.rows.map((row) => row.id);

      return favoritedProviderIds;
    } finally {
      client.release();
    }
  }
}
