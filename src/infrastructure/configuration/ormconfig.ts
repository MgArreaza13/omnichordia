// src/infrastructure/configuration/ormconfig.ts
import { DataSourceOptions } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

const getHost = () : string => {
	const enviroment = process.env.NODE_ENV;
	if (enviroment === 'CI/CD') {
		return "localhost";
	}
	const host = process.env.DB_HOST;
	if (host)
		return host;
	return "localhost";
}

const typeORMConfig: DataSourceOptions = {
  type: "postgres",
  host: getHost(),
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [], // Lista vacía por ahora
  synchronize: true, // No usar en producción
  logging: false,
};

export default typeORMConfig;
