import dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

const dbConfig = () => ({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});

export const databaseConfig: IDatabaseConfig = {
  development: {
    ...dbConfig(),
    database: process.env.DB_NAME_DEVELOPMENT,
  },
  test: {
    ...dbConfig(),
    database: process.env.DB_NAME_TEST,
  },
  production: {
    urlDatabase: process.env.DATABASE_URL,
  },
};
