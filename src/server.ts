import express, { Express } from "express";
import mainRouter from "./routes/index";
import cors from "cors"; // Importe o módulo cors


const app: Express = express();

const corsOptions ={
  origin:'http://localhost:4200/', 
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
  
app.use(mainRouter);

app.listen(80, () => {
    console.log('Aplicação rodando na porta 80');
});
