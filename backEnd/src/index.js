const server = require('./server');
const config = require('./config/general');
server.listen(config.PORT, () => console.log(`Servidor Rodando na porta: ${config.PORT}`));