import * as pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";

dotenv.config();

const poolConfig =
  process.env.IS_PRODUCTION === "true"
    ? {
        // PRODUCAO
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || "5432"),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        // DESENVOLVIMENTO
        host: process.env.POSTGRES_HOST_DEV,
        port: parseInt(process.env.POSTGRES_PORT_DEV || "5434"),
        user: process.env.POSTGRES_USER_DEV,
        password: process.env.POSTGRES_PASSWORD_DEV,
        database: process.env.POSTGRES_DB_DEV,
      };
      
export const connection = new Pool(poolConfig);
