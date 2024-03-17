
import request from 'supertest';
import express, { Router } from 'express';
import mainRouter from '../routes';  // Substitua pelo caminho correto para o seu arquivo de rotas

const app = express();
app.use('/', mainRouter);

describe('Teste das rotas', () => {
  it('deve responder com um status 200 para a rota GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página principal');
  });

  it('deve responder com um status 200 para a rota GET /login', async () => {
    const res = await request(app).get('/login');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página de login');
  });

  it('deve responder com um status 200 para a rota GET /registro', async () => {
    const res = await request(app).get('/registro');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página de registro');
  });

  it('deve responder com um status 200 para a rota GET /login/historico', async () => {
    const res = await request(app).get('/login/historico');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página de histórico');
  });

  it('deve responder com um status 200 para a rota GET /login/servico', async () => {
    const res = await request(app).get('/login/servico');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página de serviço');
  });

  it('deve responder com um status 200 para a rota GET /login/analise', async () => {
    const res = await request(app).get('/login/analise');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Página de análise');
  });

  it('deve responder com um status 404 para uma rota inexistente', async () => {
    const res = await request(app).get('/rota_inexistente');
    expect(res.statusCode).toEqual(404);
    expect(res.text).toEqual('Página não encontrada!');
  });
});


