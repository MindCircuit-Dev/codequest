// quest-timer.js
let timer;
let timeLeft = 0;
let currentQuestion = 0;
let score = 0;
const tickAudio = new Audio("tick.mp3"); // load once

function startTimer(duration) {
  timeLeft = duration;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = `⏱ ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱ ${timeLeft}s`;

    if (timeLeft <= 10) {
  timerDisplay.style.color = "#ff3b3b";
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
