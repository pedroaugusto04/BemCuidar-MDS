import { PoolClient, QueryResult } from "pg";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../database/config";
import { ServiceProvider } from "../models/ServiceProvider";

export class ServiceProviderService {
  public static async getProviders(): Promise<ServiceProvider[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT * FROM service_providers";
      const result: QueryResult = await client.query(sqlStatement);
      return result.rows as ServiceProvider[];
    } finally {
      client.release();
    }
  }

  public static async createProvider(
    newProvider: ServiceProvider
  ,userId: string): Promise<ServiceProvider> {
    const client: PoolClient = await connection.connect();
    try {
      const id = uuidv4();
      newProvider.id = id;
      const sqlStatement =
        "INSERT INTO service_providers (id, name,age,state,country,city,photo,service_description,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *";
      const values = [
        newProvider.id,
        newProvider.name,
        newProvider.age,
        newProvider.state,
        newProvider.country,
        newProvider.city,
        newProvider.photo,
        newProvider.service_description,
        userId
      ];
      const { rows } = await client.query(sqlStatement, values);

      return rows[0] as ServiceProvider;
    } finally {
      client.release();
    }
  }

  public static async getProviderAnnouncements(userId: string): Promise<ServiceProvider[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT * FROM service_providers WHERE user_id = $1";
      const result: QueryResult = await client.query(sqlStatement,[userId]);
      return result.rows as ServiceProvider[];
    } finally {
      client.release();
    }
  }
}
