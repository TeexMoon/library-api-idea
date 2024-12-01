const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Usuario = require('./usuario.model');
const Livro = require('./livro.model');

const Emprestimo = sequelize.define('Emprestimo', {
  EmprestimoId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dataEmprestimo: { type: DataTypes.DATE, allowNull: false },
  dataDevolucao: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false }
});

Emprestimo.belongsTo(Usuario, { foreignKey: 'UsuarioId' });
Emprestimo.belongsTo(Livro, { foreignKey: 'LivroId' });

module.exports = Emprestimo;
