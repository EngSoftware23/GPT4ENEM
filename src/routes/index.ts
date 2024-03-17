import express, { Router, Request, Response } from 'express';

const downloadController = require('../controllers/downloadController');

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
});

mainRouter.get('/historico', async (req: Request, res: Response) => {});

mainRouter.post('/servicos', downloadController.downloadAudio)

mainRouter.post('/transcricao', downloadController.downloadAudio)

mainRouter.post('/resumo', downloadController.downloadAudio)

mainRouter.post('/revisao', downloadController.downloadAudio)

mainRouter.use((req: Request, res: Response) => {
});

export default mainRouter;