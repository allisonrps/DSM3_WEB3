const express = require('express');
const server = express();

const funcionarioRoutes = require('./routes/funcionarioRoutes');
const connectDB = require('./db');

// Middleware
server.use(
    express.urlencoded({
        extended: true
    })
);

server.use(express.json());

// Endpoint e rotas da API
server.use('/funcionario', funcionarioRoutes);

// Conexão com o MongoDB Atlas
connectDB();

server.listen(3000);