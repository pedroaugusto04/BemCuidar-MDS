import express from "express";

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BemCuidar API',
            version: 'Sprint 1',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routers/*.router.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: express.Express) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    })
};