import express, { Express } from 'express';
import { router } from './routes';
import { urlencoded } from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swaggerConfig';

const port: number = 3000;
const app: Express = express();

app.use(express.json({limit: '50mb'}));
app.use(urlencoded({limit: '50mb'}));
app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
})