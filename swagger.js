
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const personaRoutes = require('./src/routes/PersonaRoutes');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentación',
            version: '1.0.0',
            description: 'Documentación de mi API',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`, // Reemplaza con la URL de tu API
            },
        ],
    },
    apis: ['./src/routes/PersonaRoutes.js'], // Agrega la ruta a indexRoutes.js
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
