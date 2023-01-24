const gameboard = () => {
  const _board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  function displayBoard() {
    checkScore(_board);

    let turn = 1;
    let turnDisplay = document.querySelector(".turn-display");
    let cell = document.querySelectorAll(".board-display > div");

    turnDisplay.innerText = "X's Turn";

    for (i = 0; i < cell.length; i++) {
      cell[i].addEventListener("click", (e) => {
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
            checkScore(_board);
          }
        }
      });
    }
  }

  return {
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
}

function checkScore(arr) {
  let turnDisplay = document.querySelector(".turn-display");
  let temp = arr;
  let tie = true;
  let win = false;
  let winner = "";

  for (i = 0; i < temp.length; i++) {
    if (
      temp[i][0] === temp[i][1] &&
      temp[i][1] === temp[i][2] &&
      temp[i][0] !== null
    ) {
      win = true;
      winner = temp[i][0];
    }

    if (
      temp[0][i] === temp[1][i] &&
      temp[1][i] === temp[2][i] &&
      temp[0][i] !== null
    ) {
      win = true;
      winner = temp[0][i];
    }
  }

  if (
    temp[0][0] === temp[1][1] &&
    temp[1][1] === temp[2][2] &&
    temp[0][0] !== null
  ) {
    win = true;
    winner = temp[0][0];
  }

  if (
    temp[0][2] === temp[1][1] &&
    temp[1][1] === temp[2][0] &&
    temp[0][2] !== null
  ) {
    win = true;
    winner = temp[0][2];
  }

  if (win === true) {
    turnDisplay.innerText = winner + " wins!";
  }

  for (i = 0; i < temp.length; i++) {
    for (j = 0; j < temp[i].length; j++) {
      if (temp[i][j] === null) {
        tie = false;
      }
    }
  }

  if (tie === true) {
    turnDisplay.innerText = "It's a tie!";
  }
}

temporary();
temporary2();
