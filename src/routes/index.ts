import express, { Router, Request, Response } from 'express';

const downloadController = require('../controllers/downloadController');

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
    res.send('Requisição recebida');
});

mainRouter.get('/login', (req: Request, res: Response) => {
    res.send('Página de login');
});

mainRouter.get('/registro', (req: Request, res: Response) => {
    res.send('Página de registro');
});

mainRouter.get('/login/historico', (req: Request, res: Response) => {
    res.send('Página de histórico');
});

mainRouter.get('/login/servico', (req: Request, res: Response) => {
    res.send('Página de serviço');
});

mainRouter.get('/login/analise', (req: Request, res: Response) => {
    res.send('Página de análise');
});



mainRouter.post('/transcricao', (req: Request, res: Response) => {
    res.send('hello')
});

mainRouter.post('/download', downloadController.downloadAudio)

mainRouter.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

export default mainRouter;
