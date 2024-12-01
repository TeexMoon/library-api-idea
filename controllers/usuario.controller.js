const Usuario = require('../models/usuario.model');

exports.create = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Funções para read, update, delete aqui...
