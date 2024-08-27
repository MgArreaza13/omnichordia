import { DataSource } from 'typeorm';

export class HealthCheckDatabaseUseCase {
  private readonly dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async execute(): Promise<string> {
    try {
      if (!this.dataSource.isInitialized) {
        await this.dataSource.initialize();
      }

      // Ejecutar una consulta simple para verificar la salud de la base de datos
      await this.dataSource.query('SELECT 1');

      return 'Database is healthy';
    } catch (error) {
      console.error('Database health check failed:', error);
      return 'Database health check failed';
    }
  }
}
