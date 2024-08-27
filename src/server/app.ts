import express, { Express } from 'express';
import { applyMiddleware } from './middleware';
import { defineRoutes } from './routes';

const createApp = (): Express => {
  const app: Express = express();
  applyMiddleware(app);
  defineRoutes(app);
  return app;
};

export { createApp };
