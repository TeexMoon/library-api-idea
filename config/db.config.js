// config/db.config.js
const { Sequelize } = require('sequelize');

// Configurações de conexão
const sequelize = new Sequelize('UninassauProjectDatabase', 'root', '24788742', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // para evitar exibir queries no console, ajuste se quiser
});

// Testar conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(error => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

module.exports = sequelize;
