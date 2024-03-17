import express, { Express } from "express";
import mainRouter from "./routes/index";
import cors from "cors"; // Importe o módulo cors


const app: Express = express();

app.use(mainRouter);
app.use(cors()); // Use o middleware cors para todas as rotas

app.listen(80, () => {
    console.log('Aplicação rodando na porta 80');
});
