import { Console } from 'console';
import express, {Router, Request, Response} from 'express';

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
    console.log('Requisição recebida');
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

mainRouter.use(((req:Request, res:Response)=>{
    res.status(404).send('Página não encontrada!')
}));

export default mainRouter;