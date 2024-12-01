const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.create);
// Rotas de leitura, atualização e exclusão
module.exports = router;
