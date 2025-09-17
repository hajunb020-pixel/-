const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');

let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

function moveTarget() {
  const areaWidth = gameArea.offsetWidth - target.offsetWidth;
  const areaHeight = gameArea.offsetHeight - target.offsetHeight;
  const x = Math.random() * areaWidth;
  const y = Math.random() * areaHeight;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `점수: ${score}`;
  timerDisplay.textContent = `남은 시간: ${timeLeft}`;
  startBtn.disabled = true;

  moveTarget();
  target.style.display = 'block';

  gameInterval = setInterval(moveTarget, 1000);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `남은 시간: ${timeLeft}`;
  if (timeLeft <= 0) endGame();
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  target.style.display = 'none';
  startBtn.disabled = false;
  alert(`게임 종료! 최종 점수: ${score}`);
}

target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `점수: ${score}`;
  moveTarget();
});

startBtn.addEventListener('click', startGame);
