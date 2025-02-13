import { PoolClient, QueryResult } from "pg";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../database/config";
import { ServiceProvider } from "../models/ServiceProvider";
import { UserRequest } from "../models/UserRequest";
import { ServiceRequest } from "../models/ServiceRequest";
import { RequestStatus } from "../models/enums/RequestStatus";

export class ServiceProviderService {
  public static async getProviders(): Promise<ServiceProvider[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT s.*,u.name AS first_name, u.last_name FROM service_providers AS s INNER JOIN users AS u ON u.id = s.user_id";
      const result: QueryResult = await client.query(sqlStatement);
      var r = result.rows as ServiceProvider[];
      for(let i=0; i<result.rows.length; i++){
        r[i].name = result.rows[i].first_name + " " + result.rows[i].last_name;
      }
      return r;
    } finally {
      client.release();
    }
  }

  public static async deleteProvider(
    providerId: string
  ): Promise<void> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "DELETE FROM service_providers WHERE id = $1";
  
      const values = [providerId];
      await client.query(sqlStatement, values);
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
        "INSERT INTO service_providers (id, name,age,state,country,city,neighborhood,street,street_number,coords_lon,coords_lat,photo,service_description,user_id,exp_elderly,exp_children,exp_disabled,experience,qualifications) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *";
      const values = [
        newProvider.id,
        newProvider.name,
        newProvider.age,
        newProvider.state,
        newProvider.country,
        newProvider.city,
        newProvider.neighborhood,
        newProvider.street,
        newProvider.street_number,
        newProvider.coords_lon,
        newProvider.coords_lat,
        newProvider.photo,
        newProvider.service_description,
        userId,
        newProvider.exp_elderly,
        newProvider.exp_children,
        newProvider.exp_disabled,
        newProvider.experience ? Math.floor(newProvider.experience) : null,
        newProvider.qualifications
      ];
      const { rows } = await client.query(sqlStatement, values);

      return rows[0] as ServiceProvider;
    } finally {
      client.release();
    }
  }

  public static async updateProvider(
    newProvider: ServiceProvider,
    userId: string
  ): Promise<ServiceProvider> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = `
        UPDATE service_providers 
        SET 
          name = $2,
          age = $3,
          state = $4,
          country = $5,
          city = $6,
          neighborhood = $7,
          street = $8,
          street_number = $9,
          coords_lon = $10,
          coords_lat = $11,
          photo = $12,
          service_description = $13,
          user_id = $14,
          exp_elderly = $15,
          exp_children = $16,
          exp_disabled = $17,
          experience = $18,
          qualifications = $19
        WHERE id = $1
        RETURNING *`;
      
      const values = [
        newProvider.id, 
        newProvider.name,
        newProvider.age,
        newProvider.state,
        newProvider.country,
        newProvider.city,
        newProvider.neighborhood,
        newProvider.street,
        newProvider.street_number,
        newProvider.coords_lon,
        newProvider.coords_lat,
        newProvider.photo,
        newProvider.service_description,
        userId,
        newProvider.exp_elderly,
        newProvider.exp_children,
        newProvider.exp_disabled,
        newProvider.experience ? Math.floor(newProvider.experience) : null,
        newProvider.qualifications
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

  public static async getRequests(
    providerId: string
  ): Promise<ServiceRequest[]> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT r.* FROM user_requests_service_providers r JOIN service_providers p ON p.id = r.provider_id WHERE p.user_id = $1";
      const result: QueryResult = await client.query(sqlStatement,[providerId]);
      return result.rows as ServiceRequest[];
    } finally {
      client.release();
    }
  }

  public static async getRequest(
    providerId: string,
    requestId: string
  ): Promise<ServiceRequest> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement = "SELECT r.*,p.user_id as provider_user_id FROM user_requests_service_providers r JOIN service_providers p ON p.id = r.provider_id WHERE r.id = $1 AND p.user_id = $2 LIMIT 1";
      const result: QueryResult = await client.query(sqlStatement,[requestId, providerId]);
      if(result.rowCount == 0 || result.rows[0].provider_user_id != providerId)
        throw new Error("Cuidador não tem permissão para visualizar pedido OU pedido não existe");
      else{
        const {provider_user_id, ...final_result} = result.rows[0];
        return final_result as ServiceRequest;
      }
    } finally {
      client.release();
    }
  }

  public static async setRequestStatus(
    providerId: string, 
    requestId: string, 
    status: RequestStatus
  ): Promise<void> {
    const client: PoolClient = await connection.connect();
    try {
      const sqlStatement =
        "UPDATE user_requests_service_providers SET status=$1 WHERE id=$2 AND provider_id IN (SELECT id FROM service_providers WHERE user_id = $3) RETURNING *";
      const status_s: string = status;

      const values = [status_s, requestId, providerId];

      const result = await client.query(sqlStatement, values);
      if(result.rowCount == 0){
        throw new Error("Cuidador não tem permissão para alterar status do pedido OU pedido não existe");
      } else if (result.rowCount != null && result.rowCount > 1) {
        const msg = "ERRO CRÍTICO! Alterou mais de uma linha quando tentando setar o status de apenas um único pedido!";
        console.error(msg);
        throw new Error(msg);
      }
    } finally {
      client.release();
    }
  }
}
