let currentQuestionIndex = 0;
let questions = [];
let score = 0;


const container = document.getElementById("quiz-container");
const startBtn = document.getElementById("start");


startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    fetchQuestions();
});


function fetchQuestions() {
    fetch('http://localhost:3000/questions')


        .then(response => response.json())
        .then(data => {
            questions = data;
            showQuestion();
        })
        .catch(error => {
            container.innerHTML = `<p>Erro ao carregar perguntas.</p>`;
            console.error(error);
        });
}


function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    container.innerHTML = `
        <div class="question-card">
            <h2>${q.question}</h2>
            <ul id="options">
                ${q.options.map((opt, index) => `
                    <li>
                        <button class="option-btn" data-index="${index}">${opt}</button>
                    </li>
                `).join("")}
            </ul>
        </div>
    `;

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            const selected = e.target.innerText;
            if (selected === q.answer) {
                score++;
            }
            currentQuestionIndex++;
            showQuestion();
        });
    });
}


function showResult() {
    container.innerHTML = `
        <div class="result-card">
            <h2 class="result-title">🎉 Fim do Quiz!</h2>
            <p class="result-score">Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.</p>
            <button id="restart" class="btn-restart">🔁 Reiniciar Quiz</button>
        </div>
    `;

    document.getElementById("restart").addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        fetchQuestions();
    });
}

