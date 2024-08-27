import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

export const initializeEnvironment = (): void => {
  const currentFileURL = new URL(import.meta.url);
  const currentFilePath = fileURLToPath(currentFileURL);
  const envFilePath = path.resolve(path.dirname(currentFilePath), `../.env.${process.env.ENV || 'development'}`);
  dotenv.config({ path: envFilePath });
};
