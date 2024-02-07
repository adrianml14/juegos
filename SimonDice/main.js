const simonColors = ['rojo', 'verde', 'azul', 'amarillo'];
let sequence = [];
let userSequence = [];
let score = 0;

function createSimonButtons() {
  const simonBoard = document.getElementById('simon-board');
  simonColors.forEach(color => {
    const btn = document.createElement('div');
    btn.classList.add('simon-btn');
    btn.dataset.color = color;
    btn.style.backgroundColor = color;
    btn.addEventListener('click', handleButtonClick);
    simonBoard.appendChild(btn);
  });
}

function startGame() {
  document.getElementById('start-btn').style.display = 'none';
  createSimonButtons();
  sequence = [];
  userSequence = [];
  score = 0;
  updateScore();
  nextRound();
}

function nextRound() {
  addToSequence();
  showSequence();
}

function addToSequence() {
  const randomColor = simonColors[Math.floor(Math.random() * 4)];
  sequence.push(randomColor);
}

function showSequence() {
  let i = 0;
  const intervalId = setInterval(() => {
    const currentColor = sequence[i];
    playColor(currentColor);
    highlightButton(currentColor);
    i++;

    if (i >= sequence.length) {
      clearInterval(intervalId);
      setTimeout(enableUserInput, 500);
    }
  }, 1000);
}

function highlightButton(color) {
  const btn = document.querySelector(`.simon-btn[data-color="${color}"]`);
  btn.classList.add('highlight');
  setTimeout(() => {
    btn.classList.remove('highlight');
  }, 500);
}

function playColor(color) {
  console.log(`Simón dice: ${color}`);
  // Agrega aquí la lógica para reproducir el sonido asociado a cada color
  // Puedes usar librerías como "Howler.js" para gestionar los sonidos.
  // Por ahora, solo mostramos un mensaje en la consola.
}

function enableUserInput() {
  document.querySelectorAll('.simon-btn').forEach(btn => {
    btn.style.pointerEvents = 'auto';
  });
}

function handleButtonClick(event) {
  const clickedColor = event.target.dataset.color;
  playColor(clickedColor);
  userSequence.push(clickedColor);
  disableUserInput();

  if (!checkUserInput()) {
    endGame();
    return;
  }

  if (userSequence.length === sequence.length) {
    score++;
    updateScore();
    setTimeout(nextRound, 1000);
  }
}

function disableUserInput() {
  document.querySelectorAll('.simon-btn').forEach(btn => {
    btn.style.pointerEvents = 'none';
  });
}

function checkUserInput() {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== sequence[i]) {
      return false;
    }
  }
  return true;
}

function updateScore() {
  document.getElementById('score').innerText = `Puntuación: ${score}`;
}

function endGame() {
  alert(`¡Has perdido! Tu puntuación final es ${score}.`);
  document.getElementById('start-btn').style.display = 'block';
  document.getElementById('simon-board').innerHTML = '';
}
