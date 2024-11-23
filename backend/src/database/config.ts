import * as pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";

dotenv.config();

export const connection = new Pool({
  host: process.env.POSTGRES_HOST_DEV,
  port: parseInt(process.env.POSTGRES_PORT_DEV || "5434"),
  user: process.env.POSTGRES_USER_DEV,
  password: process.env.POSTGRES_PASSWORD_DEV,
  database: process.env.POSTGRES_DB_DEV,
});

/*
prod
export const connection = createPool({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});*/
