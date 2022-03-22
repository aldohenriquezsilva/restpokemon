const express = require('express')
var cors = require('cors')

class Server{

   constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.rutaPath = '/api/buscarpokemon';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        //Directorio publico
        this.app.use( express.static('public') );
        
        //Parseo y lectura del body
        this.app.use( express.json() );
    }

    routes() {   
        this.app.use(this.rutaPath, require('../routes/pokemon'));       
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port); 
        });
    }

}

module.exports = Server;