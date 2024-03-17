import express, { Router, Request, Response } from 'express';

const downloadController = require('../controllers/downloadController');

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
    res.status(200).end();
});

mainRouter.get('/historico', async (req: Request, res: Response) => {
        res.status(200).end();

});

mainRouter.post('/transcricao', express.json(), downloadController.downloadAudio);

mainRouter.post('/resumo', express.json(), downloadController.downloadAudio);

mainRouter.post('/revisao', express.json(), downloadController.downloadAudio);

mainRouter.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default mainRouter;