const express = require('express');

const server = express();

// Query params = ?param=1 | req.query.nome
// Route params = /users/1 | req.params.id | { id } = req.params;
// Request body = {name: "nome"}

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);