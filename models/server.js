const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioRoute = '/api/usuario';
        //middlewares
        this.middlewares();

        this.routes();
    }

    routes() {
       this.app.use(this.usuarioRoute, require('../routes/usuario'));
      
    }
    listen() {
        this.app.listen(this.port, () => console.log(`servidor corriendo en el puerto ${this.port}`));
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));

    }
}

module.exports = Server;
