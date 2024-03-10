import express, { Express } from "express";
import mainRouter from "./routes";

const app: Express = express();

app.listen(80, () => {
    console.log('Aplicação rodando na porta 80');
});

app.use(mainRouter);