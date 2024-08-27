import { Request, Response } from 'express';
import { HealthCheckUseCase } from '../../application/use-cases/health-check.use-case';
import { HealthCheckDatabaseUseCase } from '../../application/use-cases/health-check-database.use-case';

export class HealthCheckController {
	private healthCheckUseCase: HealthCheckUseCase;
	private healthCheckDatabaseUseCase: HealthCheckDatabaseUseCase;

	constructor(
		healthCheckUseCase: HealthCheckUseCase,
		healthCheckDatabaseUseCase: HealthCheckDatabaseUseCase,
	) {
		this.healthCheckUseCase = healthCheckUseCase;
		this.healthCheckDatabaseUseCase = healthCheckDatabaseUseCase;
	}

	public async getHealth(req: Request, res: Response): Promise<void> {
		const healthStatus = this.healthCheckUseCase.execute();
		const healthDatabaseStatus =
			await this.healthCheckDatabaseUseCase.execute();
		res.status(200).json({
			healthStatus,
			healthDatabaseStatus,
		});
	}
}
