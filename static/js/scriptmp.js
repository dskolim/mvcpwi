const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
  const board = new Board();
  const humanPlayer1 = new HumanPlayer1(board);
  const humanPlayer2 = new HumanPlayer2(board);
  let turn = 0;

  this.start = function() {
    const config = { childList: true };
    const observer = new MutationObserver(() => takeTurn());
    board.positions.forEach((el) => observer.observe(el, config));
    takeTurn();
  }

  function takeTurn() {
    if (board.checkForWinner()) {
      return;
    }

    if (turn % 2 === 0) {
      humanPlayer1.takeTurn();
    } else {
      humanPlayer2.takeTurn();
    }

    turn++;
  };
}

function Board() {
  this.positions = Array.from(document.querySelectorAll('.col'));

  this.checkForWinner = function() {
    let winner = false;

    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];

    const positions = this.positions;
    winningCombinations.forEach((winningCombo) => {
      const pos0InnerText = positions[winningCombo[0]].innerText;
      const pos1InnerText = positions[winningCombo[1]].innerText;
      const pos2InnerText = positions[winningCombo[2]].innerText;
      const isWinningCombo = pos0InnerText !== '' &&
        pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
      if (isWinningCombo) {
          winner = true;
          winningCombo.forEach((index) => {
            positions[index].className += ' winner';
          })
      }
    });

    return winner;
  }
}

function HumanPlayer2(board) {
  this.takeTurn = function() {
    board.positions.forEach(el =>
      el.addEventListener('click', handleTurnTaken));
  }

  function handleTurnTaken(event) {
	if (event.target.innerText === '')	{
    event.target.innerText = 'O';
    board.positions
      .forEach(el => el.removeEventListener('click', handleTurnTaken));
	}
  }
}

function HumanPlayer1(board) {
  this.takeTurn = function() {
    board.positions.forEach(el =>
      el.addEventListener('click', handleTurnTaken));
  }

  function handleTurnTaken(event) {
	if (event.target.innerText === '')	{
    event.target.innerText = 'X';
    board.positions
      .forEach(el => el.removeEventListener('click', handleTurnTaken));
	}
  }
}
