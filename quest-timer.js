function startTimer(seconds, onTimeUp) {
  let timeLeft = seconds;
  const display = document.getElementById("time-left");
  const timerElement = document.getElementById("timer");

  const countdown = setInterval(() => {
    timeLeft--;
    display.textContent = timeLeft;

    if (timeLeft <= 10) {
      timerElement.style.color = "red";
      timerElement.style.fontWeight = "bold";
      timerElement.style.animation = "blink 1s step-start infinite";
    }

    if (timeLeft <= 0) {
      clearInterval(countdown);
      if (onTimeUp) onTimeUp(); // automatically ends challenge when time runs out
    }
  }, 1000);
}

// blinking red when time is almost over
const style = document.createElement("style");
style.innerHTML = `
@keyframes blink {
  50% { opacity: 0.3; }
}`;
document.head.appendChild(style);
