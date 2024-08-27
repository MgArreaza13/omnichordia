import express, { Express, Request, Response, NextFunction } from 'express';

export const applyMiddleware = (app: Express): void => {
  // Aquí usamos el módulo de express para acceder a sus funciones
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Middleware de manejo de errores
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Algo falló!');
  });
};
