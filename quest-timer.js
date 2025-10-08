// quest-timer.js
let timer;
let timeLeft = 0;
let currentQuestion = 0;
let score = 0;

function startTimer(duration) {
  timeLeft = duration;
  const timerDisplay = document.getElementById("timer");

  timerDisplay.innerText = `⏱ ${timeLeft}s`;
  const tickAudio = new Audio("tick.mp3"); // optional ticking sound

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱ ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerDisplay.style.color = "#ff3b3b";
      timerDisplay.style.transform = "scale(1.2)";
      tickAudio.play().catch(()=>{}); // play tick
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
  nextQuestion(questions);
}

function nextQuestion(questions) {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(questions);
  } else {
    endQuiz("🎉 Quiz Complete!");
  }
}

function endQuiz(message) {
  clearInterval(timer);
  const quizBox = document.querySelector(".quiz-box");
  quizBox.innerHTML = `
    <h1>${message}</h1>
    <p>Your Score: ${score} / ${questions.length}</p>
    <p>Time Remaining: ${timeLeft}s</p>
    <button onclick="window.location.href='choose-quest.html'">Back to Quests</button>
  `;
}
