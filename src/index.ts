import express, { Express, Request, Response } from "express";

const app: Express = express();
const port:number = 3000;

app.get("/", (request: Request, response: Response) => {
  response.send("Iniciando desafio técnico para o Meu Crediário!");
});

app.listen(port, () => {
  console.log(`API operando na porta ${port}!`);
});