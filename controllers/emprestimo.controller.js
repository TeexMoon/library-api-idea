const Emprestimo = require('../models/emprestimo.model');
const Usuario = require('../models/usuario.model');

exports.create = async (req, res) => {
  try {
    const { UsuarioId, LivroId, dataDevolucao } = req.body;
    const usuario = await Usuario.findByPk(UsuarioId);

    if (usuario.emprestimosAtuais >= 3) {
      return res.status(400).json({ message: 'Limite de empréstimos atingido' });
    }

    const emprestimo = await Emprestimo.create({
      UsuarioId,
      LivroId,
      dataEmprestimo: new Date(),
      dataDevolucao,
      status: 'Ativo'
    });

    usuario.emprestimosAtuais += 1;
    await usuario.save();

    res.status(201).json(emprestimo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Funções para devolução e relatórios aqui...
