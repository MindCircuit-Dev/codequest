let currentQuestion = 0;
let score = 0;
let timeLeft = 0;
let timer;

function showQuestion(questions) {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answerDiv = document.getElementById("answers");
  answerDiv.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.innerText = a.text;
    btn.onclick = () => selectAnswer(a.correct, questions);
    answerDiv.appendChild(btn);
  });
}

function selectAnswer(correct, questions) {
  if (correct) score++;
  document.getElementById("score").innerText = `Score: ${score} / ${questions.length}`;
}

function nextQuestion(questions) {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(questions);
  } else {
    endQuiz("🎉 Quiz Complete!");
  }
}

function startTimer(duration) {
  timeLeft = duration;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = `⏱ ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱ ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerDisplay.style.color = "#ff3b3b"; // red warning
      timerDisplay.style.transform = "scale(1.2)";
    } else {
      timerDisplay.style.color = "#ffeb3b";
      timerDisplay.style.transform = "scale(1)";
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz("⏰ Time's up!");
    }
  }, 1000);
}

function endQuiz(message) {
  clearInterval(timer);
  const quizBox = document.querySelector(".quiz-box");
  quizBox.innerHTML = `
    <h1>${message}</h1>
    <p>You scored ${score} out of ${currentQuestion + 1}.</p>
    <button onclick="window.location.href='choose-quest.html'">⬅ Back to Quests</button>
  `;
}
