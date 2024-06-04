const router = require('express').Router();
const Funcionario = require('../models/funcionario');

// GET (SELECT) de todos os funcionários
router.get('/', async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// GET (SELECT) de um funcionário por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const funcionario = await Funcionario.findById(id);
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado' });
        }
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST (INSERT) de um novo funcionário
router.post('/', (req, res) => {
    const {nome, cargo, salario, contratado} = req.body;
    if (!nome || !cargo || !salario || !contratado) {
        res.status(422).json({error: 'Informar o nome, cargo, salário e se está contratado!'});
    }
    const funcionario = {
        nome,
        cargo,
        salario,
        contratado
    };

    try {
        Funcionario.create(funcionario);
        res.status(201).json({message: 'Funcionário criado com sucesso!'});
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// PUT (UPDATE) de um funcionário por ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cargo, salario, contratado } = req.body;
    if (!nome || !cargo || !salario || !contratado) {
        return res.status(422).json({ error: 'Informar o nome, cargo, salário e se está contratado!' });
    }
    try {
        const funcionario = await Funcionario.findByIdAndUpdate(
            id,
            { nome, cargo, salario, contratado },
            { new: true }
        );
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// DELETE de um funcionário por ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Funcionario.findByIdAndDelete(id);
        res.status(200).json({ message: 'Funcionário deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;