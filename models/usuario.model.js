const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Usuario = sequelize.define('Usuario', {
  UsuarioId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  emprestimosAtuais: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = Usuario;