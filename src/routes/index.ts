import express, { Router, Request, Response } from 'express';

import admin from "../services/serviceFirebase";

const db = admin.firestore();

const downloadController = require('../controllers/downloadController');

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
});

mainRouter.get('/login/historico', async (req: Request, res: Response) => {});


mainRouter.get('/login/servico', (req: Request, res: Response) => {
});

mainRouter.get('/login/analise', (req: Request, res: Response) => {
});

mainRouter.post('/transcricao', downloadController.downloadAudio)

mainRouter.post('/revisao', downloadController.downloadAudio)

mainRouter.use((req: Request, res: Response) => {
});

export default mainRouter;