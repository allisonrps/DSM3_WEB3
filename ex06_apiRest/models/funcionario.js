const mongoose = require('mongoose');

const funcionario = mongoose.model('funcionario', {
    nome: String,
    cargo: String,
    salario: Number,
    contratado: Boolean
});

module.exports = funcionario;