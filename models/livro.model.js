const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Livro = sequelize.define('Livro', {
  LivroId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  autor: { type: DataTypes.STRING, allowNull: false },
  genero: { type: DataTypes.STRING, allowNull: false },
  anoPublicacao: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Livro;