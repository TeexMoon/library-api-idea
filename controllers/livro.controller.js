const Livro = require('../models/livro.model');

exports.create = async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Funções para read, update, delete aqui...
