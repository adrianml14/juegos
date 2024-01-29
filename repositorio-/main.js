const rows = 10;
const cols = 10;
const mines = 15;

const gameBoard = document.getElementById('matriz'); 
let board = [];

function initializeBoard() {
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = {
        isMine: false,
        isOpen: false,
        count: 0
      };
    }
  }

  let placedMines = 0;
  while (placedMines < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!board[row][col].isMine) {
      board[row][col].isMine = true;
      placedMines++;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!board[i][j].isMine) {
        for (let m = -1; m <= 1; m++) {
          for (let n = -1; n <= 1; n++) {
            const newRow = i + m;
            const newCol = j + n;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (board[newRow][newCol].isMine) {
                board[i][j].count++;
              }
            }
          }
        }
      }
    }
  }
}

function renderBoard() {
  gameBoard.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (!board[i][j].isOpen) {
        cell.classList.add('hidden');
        cell.addEventListener('click', () => revealCell(i, j));
      } else {
        if (board[i][j].isMine) {
          cell.classList.add('mine');
        } else {
          cell.textContent = board[i][j].count || '';
        }
      }
      gameBoard.appendChild(cell);
    }
  }
}

function revealCell(row, col) {
  if (board[row][col].isMine) {
    alert('¡Has perdido! ¡Había una mina!');
    resetGame();
  } else {
    openCell(row, col);
    if (checkWin()) {
      alert('¡Has ganado! ¡Has encontrado todas las celdas seguras!');
      resetGame();
    }
  }
}

function openCell(row, col) {
  if (!board[row][col].isOpen) {
    board[row][col].isOpen = true;
    if (board[row][col].count === 0) {
      for (let m = -1; m <= 1; m++) {
        for (let n = -1; n <= 1; n++) {
          const newRow = row + m;
          const newCol = col + n;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            openCell(newRow, newCol);
          }
        }
      }
    }
  }
  renderBoard();
}

function checkWin() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!board[i][j].isMine && !board[i][j].isOpen) {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  board = [];
  initializeBoard();
  renderBoard();
}

initializeBoard();
renderBoard();