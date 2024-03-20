import express, { Express } from "express";
import mainRouter from "./routes/index";
import cors from "cors"; 
import dotenv from "dotenv";

dotenv.config();


const app: Express = express();

const corsOptions ={
  origin:'https://gpt4enem-production-1c80.up.railway.app', 
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
  
app.use(mainRouter);

app.listen(process.env.PORT, () => {
    console.log('Aplicação rodando');
});
