import { Express, Request, Response } from 'express';
import { HealthCheckDatabaseUseCase } from 'src/application/use-cases/health-check-database.use-case';
import { HealthCheckUseCase } from 'src/application/use-cases/health-check.use-case';
import { TypeORMDataSource } from 'src/infrastructure/adapters/TypeORMDataSource';
import { HealthCheckController } from 'src/interfaces/http/health-check.controller';

export const defineRoutes = (app: Express): void => {
	const typeORMDataSource = new TypeORMDataSource();
	const healthCheckController = new HealthCheckController(
		new HealthCheckUseCase(),
		new HealthCheckDatabaseUseCase(typeORMDataSource.getDataSource()),
	);

	app.get('/', (req: Request, res: Response) => {
		res.send('¡Hola, mundo!');
	});

	app.get('/health', (req: Request, res: Response) =>
		healthCheckController.getHealth(req, res),
	);

};
