import express, { Express } from "express";
import mainRouter from "./routes";
import { createTestData } from './database/firestoreDatabase'; 
import OpenAI from 'openai';



const app: Express = express();

app.use(mainRouter);

app.listen(80, () => {
    console.log('Aplicação rodando na porta 80');
    //createTestData().catch(console.error); 
});
