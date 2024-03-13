import express, {Router, Request, Response} from 'express';

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
});

mainRouter.get('/login', (req: Request, res: Response) => {
});

mainRouter.get('/registro', (req: Request, res: Response) => {
});

mainRouter.get('/login/historico', (req: Request, res: Response) => {
});

mainRouter.get('/login/servico', (req: Request, res: Response) => {
});

mainRouter.get('/login/analise', (req: Request, res: Response) => {
});

mainRouter.use(((req:Request, res:Response)=>{
}));



export default mainRouter;