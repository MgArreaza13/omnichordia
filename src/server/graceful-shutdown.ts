import { Server } from 'http';

export const setupGracefulShutdown = (server: Server): void => {
  const gracefulShutdown = () => {
    if (server) {
      server.close(() => {
        console.log('Servidor cerrado correctamente.');
        process.exit(0);
      });
    }
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
};
