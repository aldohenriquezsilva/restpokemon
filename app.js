require('dotenv').config();
const Server = require('./apiServices/models/server');

const server = new Server();

server.listen();