import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Crediário API',
            version: '1.0.0',
            description: 'Documentação para o consumo dos endpoints da API RESTful',
        },
    },
    apis: [`${__dirname}/routes/*.ts`],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { swaggerDocs };