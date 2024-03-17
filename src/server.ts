import express, { Express } from "express";
import mainRouter from "./routes";
import cors from "cors";


const app: Express = express();

app.use(mainRouter);
app.use(cors()); 

app.listen(80, () => {
    console.log('Aplicação rodando na porta 80');
});
