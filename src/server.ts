import express, { Express, Request, Response } from 'express';
import { router } from './routes';

const port: number = 3000;
const app: Express = express();

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
})