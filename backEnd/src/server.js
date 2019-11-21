const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('./config/general');

class App {

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.conect();
    }

    middlewares() {
        this.express.use(express.urlencoded({ extended: false })); // permite o envio de arquivo
        this.express.use(cors()); //permite que aplicacoes externas acessem nossa api
        this.express.use(bodyParser.json({ limit: '5mb', extended: true }));
        this.express.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
    }

    routes() {
        this.express.use(routes);
    }

    conect() {
        mongoose.connect(config.Connection,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        ).then(() => {
            console.log('MongoDB está conectado')
        }).catch(err => {
            console.log('MongoDB connection falhou');
            console.log(err)
        });
        mongoose.set('useCreateIndex', true)

    }
}

module.exports = new App().express;