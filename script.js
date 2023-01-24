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
    for (i = 0; i < temp.length; i++) {
      temp[i].addEventListener("click", (e) => {
        if (e.target.innerText == "") {
          if (turn % 2 === 0) {
            e.target.innerText = "O";
            turnDisplay.innerText = "X's Turn";
            turn++;
            if (e.target.id === "zeroZero") {
              _board[0][0] = "O";
            }
            if (e.target.id === "zeroOne") {
              _board[0][1] = "O";
            }
            if (e.target.id === "zeroTwo") {
              _board[0][2] = "O";
            }
            if (e.target.id === "oneZero") {
              _board[1][0] = "O";
            }
            if (e.target.id === "oneOne") {
              _board[1][1] = "O";
            }
            if (e.target.id === "oneTwo") {
              _board[1][2] = "O";
            }
            if (e.target.id === "twoZero") {
              _board[2][0] = "O";
            }
            if (e.target.id === "twoOne") {
              _board[2][1] = "O";
            }
            if (e.target.id === "twoTwo") {
              _board[2][2] = "O";
            }
            checkScore(_board);
          } else {
            e.target.innerText = "X";
            turnDisplay.innerText = "O's Turn";
            turn++;
            if (e.target.id === "zeroZero") {
              _board[0][0] = "X";
            }
            if (e.target.id === "zeroOne") {
              _board[0][1] = "X";
            }
            if (e.target.id === "zeroTwo") {
              _board[0][2] = "X";
            }
            if (e.target.id === "oneZero") {
              _board[1][0] = "X";
            }
            if (e.target.id === "oneOne") {
              _board[1][1] = "X";
            }
            if (e.target.id === "oneTwo") {
              _board[1][2] = "X";
            }
            if (e.target.id === "twoZero") {
              _board[2][0] = "X";
            }
            if (e.target.id === "twoOne") {
              _board[2][1] = "X";
            }
            if (e.target.id === "twoTwo") {
              _board[2][2] = "X";
            }
          }
        }
      });
    }
    checkScore(_board);
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

function checkScore(arr) {
  for (let i = 0; i < 3; i++) {
    if (
      arr[i][0] === arr[i][1] &&
      arr[i][0] === arr[i][2] &&
      arr[i][0] !== null
    ) {
      if (arr[i][0] === "X") {
        alert("X wins");
      } else {
        alert("O wins");
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      arr[0][i] === arr[1][i] &&
      arr[0][i] === arr[2][i] &&
      arr[0][i] !== null
    ) {
      if (arr[0][i] === "O") {
        alert("X wins");
      } else {
        alert("O wins");
      }
    }
  }

  if (
    (arr[0][0] === arr[1][1] &&
      arr[0][0] === arr[2][2] &&
      arr[0][0] !== null) ||
    (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0] && arr[0][2] !== null)
  ) {
    if (arr[0][0] === "X") {
      alert("X wins");
    } else {
      alert("O wins");
    }
  }
}
temporary();
temporary2();
