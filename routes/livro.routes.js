const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livro.controller');

router.post('/', livroController.create);
// Rotas de leitura, atualização e exclusão
module.exports = router;
