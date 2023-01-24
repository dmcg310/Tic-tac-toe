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
    const zeroZero = document.querySelector(".zeroZero");
    zeroZero.innerText = _board[0][0];
    const zeroOne = document.querySelector(".zeroOne");
    zeroOne.innerText = _board[0][1];
    const zeroTwo = document.querySelector(".zeroTwo");
    zeroTwo.innerText = _board[0][2];

    const oneZero = document.querySelector(".oneZero");
    oneZero.innerText = _board[1][0];
    const oneOne = document.querySelector(".oneOne");
    oneOne.innerText = _board[1][1];
    const oneTwo = document.querySelector(".oneTwo");
    oneTwo.innerText = _board[1][2];

    const twoZero = document.querySelector(".twoZero");
    twoZero.innerText = _board[2][0];
    const twoOne = document.querySelector(".twoOne");
    twoOne.innerText = _board[2][1];
    const twoTwo = document.querySelector(".twoTwo");
    twoTwo.innerText = _board[2][2];
  }

  return {
    getTile,
    setTile,
    displayBoard,
  };
};

function temporary() {
  board = gameboard();
  let test = prompt()
  let test2 = prompt()
  let test3 = prompt()
  board.setTile(test, test2, test3)
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
