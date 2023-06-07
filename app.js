
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const responseMiddleware = require('./src/middlewares/responseMiddleware');
const swagger = require('./swagger');
const app = express();

app.use(responseMiddleware);
app.use(bodyParser.json());
app.use('/api', require('./src/routes/indexRoutes'));

// Configurar Swagger
swagger(app);
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
});
