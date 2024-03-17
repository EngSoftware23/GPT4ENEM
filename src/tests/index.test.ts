
import request from 'supertest';
import express, { Router } from 'express';
import mainRouter from '../routes';  //Substitua pelo caminho correto para o seu arquivo de rotas

const app = express();
app.use('/', mainRouter);

describe('Teste das rotas', () => {
  it('deve responder com um status 200 para a rota GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('deve responder com um status 200 para a rota GET /historico', async () => {
    const res = await request(app).get('/historico');
    expect(res.statusCode).toEqual(200);
  });

  it('deve responder com um status 404 para uma rota inexistente', async () => {
    const res = await request(app).get('/rota_inexistente');
    expect(res.statusCode).toEqual(404);
  });
});


