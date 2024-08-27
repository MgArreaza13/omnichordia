import request from 'supertest';
import express from 'express';
import { defineRoutes } from 'src/server/routes';

describe('Health Check Integration Test', () => {
  let app: express.Express;

  beforeAll(() => {
    app = express();
    defineRoutes(app);
  });

  it('should respond with a healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.healthStatus.status).toBe('Healthy');
    expect(res.body.healthStatus).toHaveProperty('timestamp');
		expect(res.body.healthDatabaseStatus).toBe('Database is healthy');
  });
});
