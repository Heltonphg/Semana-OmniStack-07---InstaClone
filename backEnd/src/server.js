const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('./config/general');
const path = require('path');

class App {

    constructor() {
        this.express = express();
        this.middlewares();
        this.conect();
    }

    middlewares() {
        this.express.use(express.urlencoded({ extended: false })); //TODO:permite o envio de arquivo
        this.express.use(cors()); //TODO: permite que aplicacoes externas acessem nossa api
        this.express.use(bodyParser.json({ limit: '5mb', extended: true })); //TODO: limita um tamano de 5mb de dados em json, o padrao é 1mb
        this.express.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
        this.express.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) //TODO: Criando uma pasta static
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