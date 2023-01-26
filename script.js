const gameboard = () => {
	const _board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	function displayBoard() {
		let modal2 = document.querySelector(".modal-2");

		let player;
		let turn = 1;
		let turnDisplay = document.querySelector(".turn-display");
		let cell = document.querySelectorAll(".board-display > div");
		let start = document.querySelector("#start");
		let ai = document.querySelector("#ai-button");
		let xButton = document.querySelector("#x-button");
		let oButton = document.querySelector("#o-button");

		ai.addEventListener("click", () => {
			aiTurn(_board, turn, cell);
		});

		start.addEventListener("click", () => {
			modal2.style.display = "block";
		});

		xButton.addEventListener("click", () => {
			player = "X";
			turnDisplay.innerText = "X";
			modal2.style.display = "none";
		});

		oButton.addEventListener("click", () => {
			player = "O";
			turnDisplay.innerText = "O";
			modal2.style.display = "none";
		});

		window.onclick = function (event) {
			if (event.target == modal2) {
				modal2.style.display = "none";
				reset();
			}
		};

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
	let modal = document.querySelector(".modal");
	let modalText = document.querySelector(".modal-text");

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
			reset();
		}
	};

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
			modal.style.display = "block";
			modalText.innerText = "X Wins!";
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
			modal.style.display = "block";
			modalText.innerText = "O Wins!";
		}, 600);
	} else if (turn === 10) {
		setTimeout(() => {
			modal.style.display = "block";
			modalText.innerText = "Tie!";
		}, 600);
	}
}

function reset() {
	location.reload();
}

function aiTurn(_board) {
	let turnDisplay = document.querySelector(".turn-display");
	let cell = document.querySelectorAll(".board-display > div");
	let player = "O";

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
						document.getElementById("zeroZero").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 0 && secondIndex === 1) {
						document.getElementById("zeroOne").innerText = "X";
						document.getElementById("zeroOne").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 0 && secondIndex === 2) {
						document.getElementById("zeroTwo").innerText = "X";
						document.getElementById("zeroTwo").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 1 && secondIndex === 0) {
						document.getElementById("oneZero").innerText = "X";
						document.getElementById("oneZero").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 1 && secondIndex === 1) {
						document.getElementById("oneOne").innerText = "X";
						document.getElementById("oneOne").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 1 && secondIndex === 2) {
						document.getElementById("oneTwo").innerText = "X";
						document.getElementById("oneTwo").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 2 && secondIndex === 0) {
						document.getElementById("twoZero").innerText = "X";
						document.getElementById("twoZero").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 2 && secondIndex === 1) {
						document.getElementById("twoOne").innerText = "X";
						document.getElementById("twoOne").setAttribute("style", "color: #514a9d;");
					}
					if (firstIndex === 2 && secondIndex === 2) {
						document.getElementById("twoTwo").innerText = "X";
						document.getElementById("twoTwo").setAttribute("style", "color: #514a9d;");
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
