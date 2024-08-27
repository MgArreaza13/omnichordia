import { HealthCheckUseCase } from '../../src/application/use-cases/health-check.use-case';

describe('HealthCheckUseCase', () => {
  it('should return a healthy status', () => {
    const healthCheckUseCase = new HealthCheckUseCase();
    const result = healthCheckUseCase.execute();
    expect(result.status).toBe('Healthy');
    expect(result).toHaveProperty('timestamp');
  });
});
