// backend/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

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


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
