const express = require('express');
const server = express();
server.use(express.json());
//Query params = ?nome=NodeJS
//Route params = curso/2
//Request Body = { nome = 'NodeJS', tipo = 'Backend'}
//localhost:3000/curso
const cursos = ['Node JS', 'JavaScript', 'PHP', 'React Show', 'Vue'];

// 01 – Crie um Middleware que toda vez que um PUT seja requisitado verifique se existe um Request Body, caso não
// exista, informe ao cliente um código de erro e uma orientação.
function checkRequestBodyPUT(req, res, next) {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Corpo da requisição não encontrado, use o formato: {'key':'value'}" });
    }
    return next();
}

// 02 – Crie um Middleware que toda vez que um POST seja requisitado verifique se existe um Request Body, caso não
// exista, informe ao cliente um código de erro e uma orientação.
function checkRequestBody(req, res, next) {
    if (!req.body) {
        return res.status(400).json({ error: "Corpo da requisição não encontrado use o formato: {'key':'value'}" });
    }
    return next();
};

// 03 – No DELETE atual, a mensagem de erro fica dentro do próprio POST. 
// Crie um Middleware que possa lidar com essa mensagem de erro.
function errorHandler(req, res, next) {
    res.error = function (status, message) {
        res.status(status).json({ error: message });
    };
    return next();
};

// 04 – Crie um Middleware que toda vez que um curso seja inserido no banco de dados, 
// mostre no console.log a lista de cursos atualizada.
function logCursoInserido(req, res, next) {
    console.log(cursos);
    return next();
};

// 05 – Crie um Middleware que toda vez que um curso for deletado do banco de dados, 
// mostre no console.log a lista de cursos atualizada.
function logCursoDeletado(req, res, next) {
    console.log(cursos);
    return next();
};

//MIDDLEWARE Global
server.use((req, res, next)=>{
    console.log(`URL Chamada: ${req.url}`);
    return next();
});

//MIDDLEWARE LOCAL Especifico para tratar do insert de novos cursos
function checkCurso(req, res, next){
    if(!req.body.novo_curso){
      return res.status(400).json({error: "Nome do curso é obrigatorio nesse formato: {'novo_curso':'value'}"});
    }
    return next();
};

//MIDDLEWARE LOCAL Especifico para curson que não existe
function checkIDCurso(req, res, next){
    const curso = cursos[req.params.index];
    if(!curso){
      return res.status(400).json({error: "Curso não existe no ID solicitado"});
    }
    return next();
};


// CRIANDO MEU SELECT
server.get('/curso', (req, res)=>{
      return res.json(cursos);
});


// CRIANDO MEU SELECT PASSANDO ID
server.get('/curso/:index', checkIDCurso, (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index]);
});

// PERMITINDO INSERIR DADOS VIA API
server.post('/curso', checkRequestBody, checkCurso, logCursoInserido, (req, res) => {
    const { novo_curso } = req.body;
    cursos.push(novo_curso);
    console.log("Curso inserido com sucesso!");
    return res.json(cursos);
});

//Permitindo UPDATE de um Curso
server.put('/curso/:index', checkIDCurso, checkRequestBodyPUT, (req, res) => {
    const { index } = req.params;
    const { curso } = req.body;
    cursos[index] = curso;
    return res.json(cursos);
});

//Permitindo DELETE de um Curso
server.delete('/curso/:index', errorHandler, checkIDCurso, logCursoDeletado, (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado com sucesso" });
});

server.listen(3000);