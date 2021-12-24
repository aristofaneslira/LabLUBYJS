const express = require('express');
const FuncionarioController = require('../controllers/funcionario');
const { Funcionarios } = require('../models');

const VeiculoController = require('../controllers/veiculo');
const { Veiculos } = require('../models');
const { Negocios } = require('../models');

const router = express.Router();

const funcionarioController = new FuncionarioController(Funcionarios);

router.get('/funcionarios/', (req, res) => funcionarioController.getAll(req, res));
router.get('/funcionarios/:id', (req, res) => funcionarioController.getById(req, res));
router.post('/funcionarios/', (req, res) => funcionarioController.create(req, res));
router.put('/funcionarios/:id', (req, res) => funcionarioController.update(req, res));
router.delete('/funcionarios/:id', (req, res) => funcionarioController.delete(req, res));

const veiculoController = new VeiculoController(Veiculos, Negocios);

router.get('/veiculos/', (req, res) => veiculoController.getAll(req, res));
router.get('/veiculos/:id', (req, res) => veiculoController.getById(req, res));
router.post('/veiculos/', (req, res) => veiculoController.create(req, res));
router.put('/veiculos/:id', (req, res) => veiculoController.update(req, res));
router.delete('/veiculos/:id', (req, res) => veiculoController.delete(req, res));

router.post('/veiculos/:id/vender', (req, res) => veiculoController.vender(req, res));
router.post('/veiculos/:id/reservar', (req, res) => veiculoController.reservar(req, res));
router.get('/veiculos/filtrar', (req, res) => veiculoController.getById(req, res));

module.exports = router;