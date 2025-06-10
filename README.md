# Quiz de Inglês – Verbo To Be

Este é um projeto de aplicação Web criado para a disciplina de Introdução à Programação Web da faculdade.

## ✨ Descrição

Um quiz simples com 10 perguntas sobre o verbo "to be", com 3 alternativas para cada questão. Ao final, o usuário recebe a pontuação com base nas respostas corretas.

## 🚀 Tecnologias utilizadas

- HTML
- CSS (com Bootstrap)
- JavaScript
- Node.js
- Express.js

## 🧠 Funcionalidades já implementadas

- Apresentação de perguntas com múltipla escolha
- Estilização com Bootstrap (botões, containers, responsividade, etc.)
- Backend com Node.js e Express
- Rota GET `/questions` que lê o arquivo `questions.json` e envia as perguntas
- Teste da API com Postman

## 📁 Estrutura do Projeto

```
quiz-ingles/
├── backend/
│   ├── server.js           # Servidor Express
│   └── questions.json      # Arquivo com as perguntas do quiz
├── frontend/
│   ├── index.html          # Interface do usuário
│   ├── style.css           # Estilos adicionais personalizados
│   └── script.js           # Lógica do quiz no navegador
├── package.json            # Configurações e dependências do projeto
└── README.md
```

## ▶️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado
- (Opcional) [Postman](https://www.postman.com/) para testar a API

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/AnaCrisBrito/quiz-ingl-s.git
   cd quiz-ingl-s
   ```

2. Acesse a pasta `backend`:
   ```bash
   cd backend
   ```

3. Instale as dependências do backend:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   node server.js
   ```

5. Acesse a rota da API para obter as perguntas:
   ```
   http://localhost:3000/questions
   ```

### Para visualizar o quiz:

1. Abra o arquivo `frontend/index.html` em seu navegador (pode arrastar direto ou usar extensão Live Server).
2. As perguntas devem ser exibidas automaticamente a partir da API backend.
3. Responda ao quiz e veja a pontuação final após o envio.

## ✅ Próximos passos (sugestões)

- Adicionar feedback por resposta correta ou incorreta
- Criar tela de início e reinício
- Implementar conexão entre frontend e backend usando `fetch()`
- Criar rota POST para enviar respostas (se desejar guardar dados)
- Tornar o layout mais acessível e inclusivo

---

**Feito com 💙 por Ana Cristina Brito**
