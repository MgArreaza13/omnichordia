import dotenv from 'dotenv';
import { createApp } from './server/app';
import { initializeEnvironment } from './server/environment';
import { setupGracefulShutdown } from './server/graceful-shutdown';
import { TypeORMDataSource } from './infrastructure/adapters/TypeORMDataSource';

// Cargar variables de entorno
dotenv.config();

const startServer = async (): Promise<void> => {
  initializeEnvironment();

  try {
    // Inicializar la conexión de TypeORM
    const typeORMDataSource = new TypeORMDataSource();
    await typeORMDataSource.initialize();
    console.log("Conexión a la base de datos establecida.");

    // Crear e iniciar el servidor una vez la base de datos esté lista
    const app = createApp();
    const port: number = parseInt(process.env.APP_PORT || '3000', 10);
    const server = app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });

    setupGracefulShutdown(server);
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1); // Salir si hay un error crítico
  }
};

startServer();
