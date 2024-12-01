const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimo.controller');

router.post('/', emprestimoController.create);
// Rotas para devolução e relatórios
module.exports = router;
