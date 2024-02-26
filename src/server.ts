import express, { Express } from 'express';
import { router } from './routes';
import bodyParser, { urlencoded } from 'body-parser';

const port: number = 3000;
const app: Express = express();

app.use(express.json({limit: '50mb'}));
app.use(urlencoded({limit: '50mb'}));
app.use(router);
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
})