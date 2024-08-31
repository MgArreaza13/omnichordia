// src/infrastructure/configuration/ormconfig.ts
import appRootPath from 'app-root-path';
import dotenv from 'dotenv';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DatabaseConfig } from '../../persistence/typeorm/DatabaseConfig';

// Load environment variables from a .env file into process.env
const result = dotenv.config();

// Check for parsing errors
if (result.error) {
  throw result.error;
}

// Extend the PostgresConnectionOptions interface to include the cli property
interface PostgresConnectionOptionsWithCli extends PostgresConnectionOptions {
  cli?: {
    migrationsDir?: string;
  };
}

// Function to determine the current environment name
const getCurrentEnvironment = (): string => process.env.NODE_ENV || 'development';

// Function to get the host based on the environment
const getDatabaseHost = (): string =>
  getCurrentEnvironment() === 'CI/CD' ? 'localhost' : process.env.DB_HOST || 'localhost';

// Ensure critical environment variables are present
const validateEnvironmentVariables = (): void => {
  const requiredVars = ['DB_USER', 'DB_PASSWORD', 'DB_NAME'];
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Environment variable '${varName}' is not defined`);
    }
  }
};

// Validate environment variables
validateEnvironmentVariables();


// Create the TypeORM configuration object
const createTypeORMConfig = (): PostgresConnectionOptionsWithCli & DataSourceOptions => ({
  type: 'postgres',
  host: getDatabaseHost(),
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: [], // Add your entities here
  migrations: [path.join(appRootPath.path, '../../migrations/**/*.ts')],
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: false,
  cli: {
    migrationsDir: path.join(appRootPath.path, '../../migrations'),
  },
});

const typeORMConfig = new DataSource(createTypeORMConfig());

export default typeORMConfig
