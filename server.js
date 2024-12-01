const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');

const app = express();
app.use(bodyParser.json());

app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/livros', require('./routes/livro.routes'));
app.use('/api/emprestimos', require('./routes/emprestimo.routes'));

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(error => console.error('Erro ao sincronizar banco de dados:', error));
