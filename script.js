const gameboard = () => {
	const _board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	function displayBoard() {
		let player;
		let turn = 1;
		let turnDisplay = document.querySelector(".turn-display");
		let cell = document.querySelectorAll(".board-display > div");
		let start = document.querySelector("#start");
		let ai = document.querySelector("#ai-button");

		ai.addEventListener("click", () => {
			aiTurn(_board, turn, cell);
		});

		start.addEventListener("click", () => {
			player = prompt("Who goes first? (X or O)");
			player.toUpperCase();
			return (turnDisplay.innerText = player);
		});

		for (i = 0; i < cell.length; i++) {
			cell[i].addEventListener("click", (e) => {
				if (e.target.innerText == "") {
					if (player === "O" && turn === 1) {
						turn += 1;
					}

					if (turn % 2 === 0) {
						e.target.innerText = "O";
						e.target.setAttribute("style", "color: #24c6dc;");
						turnDisplay.innerText = "X";
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

						checkScore(_board, turn);
					} else {
						e.target.innerText = "X";
						e.target.setAttribute("style", "color: #514a9d;");
						turnDisplay.innerText = "O";
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

						checkScore(_board, turn);
					}
				}
			});
		}
	}

	return {
		displayBoard,
	};
};

(function init() {
	board = gameboard();
	board.displayBoard();
})();

function checkScore(arr, turn) {
	if (
		(arr[0][0] === "X" && arr[0][1] === "X" && arr[0][2] === "X") ||
		(arr[1][0] === "X" && arr[1][1] === "X" && arr[1][2] === "X") ||
		(arr[2][0] === "X" && arr[2][1] === "X" && arr[2][2] === "X") ||
		(arr[0][0] === "X" && arr[1][0] === "X" && arr[2][0] === "X") ||
		(arr[0][1] === "X" && arr[1][1] === "X" && arr[2][1] === "X") ||
		(arr[0][2] === "X" && arr[1][2] === "X" && arr[2][2] === "X") ||
		(arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") ||
		(arr[0][2] === "X" && arr[1][1] === "X" && arr[2][0] === "X")
	) {
		setTimeout(() => {
			alert("X Wins!");
			reset();
		}, 600);
	} else if (
		(arr[0][0] === "O" && arr[0][1] === "O" && arr[0][2] === "O") ||
		(arr[1][0] === "O" && arr[1][1] === "O" && arr[1][2] === "O") ||
		(arr[2][0] === "O" && arr[2][1] === "O" && arr[2][2] === "O") ||
		(arr[0][0] === "O" && arr[1][0] === "O" && arr[2][0] === "O") ||
		(arr[0][1] === "O" && arr[1][1] === "O" && arr[2][1] === "O") ||
		(arr[0][2] === "O" && arr[1][2] === "O" && arr[2][2] === "O") ||
		(arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O") ||
		(arr[0][2] === "O" && arr[1][1] === "O" && arr[2][0] === "O")
	) {
		setTimeout(() => {
			alert("O Wins!");
			reset();
		}, 600);
	} else if (turn === 9) {
		setTimeout(() => {
			alert("Tie!");
			reset();
		}, 600);
	}
}

function reset() {
	location.reload();
}

function aiTurn(_board) {
	let turnDisplay = document.querySelector(".turn-display");
	let cell = document.querySelectorAll(".board-display > div");
	let player = prompt("Would you like to be X or O?");

	if (player === "X") {
		turnDisplay.innerText = "X";
		turn = 1;
	} else if (player === "O") {
		turnDisplay.innerText = "O";
		turn = 2;
	}

	function test(turnDisplay, turn, _board, cell, player) {
		if (player === "O") {
			if (turn % 2 === 0) {
				turn++;
				for (let i = 0; i < cell.length; i++) {
					cell[i].addEventListener("click", (e) => {
						e.target.innerText = "O";
						e.target.setAttribute("style", "color: #24c6dc;");
						turnDisplay.innerText = "X";

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

						checkScore(_board, turn);
						test(turnDisplay, turn, _board, cell, player);
					});
				}
			} else if (turn % 2 !== 0) {
				let firstIndex = Math.floor(Math.random() * 3);
				let secondIndex = Math.floor(Math.random() * 3);

				turnDisplay.innerText = "O";

				if (_board[firstIndex][secondIndex] === null) {
					_board[firstIndex][secondIndex] = "X";

					if (firstIndex === 0 && secondIndex === 0) {
						document.getElementById("zeroZero").innerText = "X";
					}
					if (firstIndex === 0 && secondIndex === 1) {
						document.getElementById("zeroOne").innerText = "X";
					}
					if (firstIndex === 0 && secondIndex === 2) {
						document.getElementById("zeroTwo").innerText = "X";
					}
					if (firstIndex === 1 && secondIndex === 0) {
						document.getElementById("oneZero").innerText = "X";
					}
					if (firstIndex === 1 && secondIndex === 1) {
						document.getElementById("oneOne").innerText = "X";
					}
					if (firstIndex === 1 && secondIndex === 2) {
						document.getElementById("oneTwo").innerText = "X";
					}
					if (firstIndex === 2 && secondIndex === 0) {
						document.getElementById("twoZero").innerText = "X";
					}
					if (firstIndex === 2 && secondIndex === 1) {
						document.getElementById("twoOne").innerText = "X";
					}
					if (firstIndex === 2 && secondIndex === 2) {
						document.getElementById("twoTwo").innerText = "X";
					}

					turn++;
					checkScore(_board, turn);
				} else {
					test(turnDisplay, turn, _board, cell, player);
				}
			}
		}
	}
	test(turnDisplay, turn, _board, cell, player);
}
