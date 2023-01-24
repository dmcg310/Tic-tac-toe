const gameboard = () => {
  const _board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  function getTile(x, y) {
    return _board[x][y];
  }

  function setTile(x, y, value) {
    _board[x][y] = value;
  }

  function displayBoard() {
    let turn = 1;
    let turnDisplay = document.querySelector(".turn-display");
    let temp = document.querySelectorAll(".board-display > div");
    turnDisplay.innerText = "X's Turn";
    for (i = 0; i < temp.length; i++)
      temp[i].addEventListener("click", (e) => {
        if (e.target.innerText == "") {
          if (turn % 2 === 0) {
            e.target.innerText = "O";
            turnDisplay.innerText = "X's Turn";
            turn++;
          } else {
            e.target.innerText = "X";
            turnDisplay.innerText = "O's Turn";
            turn++;
          }
        }
      });
  }

  return {
    getTile,
    setTile,
    displayBoard,
  };
};

function temporary() {
  board = gameboard();
  board.displayBoard();
}

const players = (name, symbol) => {
  return { name, symbol };
};

function temporary2() {
  const playerOne = players("jeff", "X");
  const playerTwo = players("bob", "O");
  console.log(playerOne.name, playerOne.symbol);
}

temporary();
temporary2();
