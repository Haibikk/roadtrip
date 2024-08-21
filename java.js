let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');

function makeMove(index) {
  if (!cells[index].innerText) {
    cells[index].innerText = currentPlayer;
    if (checkWin()) {
      message.innerText = `${currentPlayer} wins!`;
      disableCells();
    } else if (checkDraw()) {
      message.innerText = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.innerText = `${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  return winningCombos.some(combo => {
    return cells[combo[0]].innerText &&
           cells[combo[0]].innerText === cells[combo[1]].innerText &&
           cells[combo[0]].innerText === cells[combo[2]].innerText;
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.innerText !== '');
}

function disableCells() {
  cells.forEach(cell => cell.style.pointerEvents = 'none');
}

function restart() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.style.pointerEvents = 'auto';
  });
  currentPlayer = 'X';
  message.innerText = `${currentPlayer}'s turn`;
}
