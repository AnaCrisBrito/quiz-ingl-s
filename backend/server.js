// backend/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Para permitir acesso do front-end

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota GET /questions
app.get('/questions', (req, res) => {
  fs.readFile('./backend/questions.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return res.status(500).json({ error: 'Erro ao carregar perguntas.' });
    }

    const questions = JSON.parse(data);
    res.json(questions);
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
