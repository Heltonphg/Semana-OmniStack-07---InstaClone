const config = require('./config/general');
const socketio = require('socket.io');
const http = require('http');
const routes = require('./routes');

//TODO: configurando protocolos http e socket\
const app = require('./server'); // <=> app = express();
const server = http.Server(app);
const io = socketio(server);

//TODO: deixando a variavel disponivel em todo a aplicacao
app.use((req, res, next) => {
    req.io = io;
    return next();
});

//as rotas devem ficar dps do socket
app.use(routes);

server.listen(config.PORT, () => console.log(`Servidor Rodando na porta: ${config.PORT}`));