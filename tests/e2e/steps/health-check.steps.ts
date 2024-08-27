import { defineFeature, loadFeature } from 'jest-cucumber';
import request from 'supertest';
import express from 'express';
import { defineRoutes } from '../../../src/server/routes';

const feature = loadFeature('./tests/e2e/features/health-check.feature');

let app: express.Express;
let response: request.Response;

defineFeature(feature, test => {
  beforeAll(() => {
    app = express();
    defineRoutes(app);
  });

  test('Check the health status', ({ when, then }) => {
    when('I request the health status', async () => {
      response = await request(app).get('/health');
    });

    then('I should receive a healthy response', () => {
      expect(response.status).toBe(200);
      expect(response.body.healthStatus.status).toBe('Healthy');
      expect(response.body.healthDatabaseStatus).toBe('Database is healthy');
    });
  });
});
