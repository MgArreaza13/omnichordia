// src/infrastructure/configuration/ormconfig.ts

import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { DatabaseConfig } from '../persistence/DatabaseConfig';

// Load environment variables from a .env file into process.env
const result = dotenv.config();

// Check for parsing errors
if (result.error) {
	throw result.error;
}

// Function to determine the current environment name
const currentEnv = process.env.NODE_ENV || 'development';

// Function to get the host based on the environment
const determineHost = (): string =>
	currentEnv === 'CI/CD' ? 'localhost' : process.env.DB_HOST || 'localhost';

// Ensure critical environment variables are present
const assertEnvironmentVariables = (): void => {
	const requiredVars = ['DB_USER', 'DB_PASSWORD', 'DB_NAME'];
	requiredVars.forEach((varName) => {
		if (!process.env[varName]) {
			throw new Error(`Environment variable '${varName}' is not defined`);
		}
	});
};

// Validate environment variables
assertEnvironmentVariables();

// TypeORM configuration object
const typeORMConfig: DatabaseConfig & DataSourceOptions = {
	type: 'postgres',
	host: determineHost(),
	port: Number(process.env.DB_PORT) || 5432,
	username: process.env.DB_USER!,
	password: process.env.DB_PASSWORD!,
	database: process.env.DB_NAME!,
	entities: [], // Add your entities here
	synchronize: currentEnv !== 'production', // Disable in production
	logging: currentEnv === 'development', // Enable in development
};

export default typeORMConfig;
