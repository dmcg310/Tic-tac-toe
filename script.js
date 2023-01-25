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
		alert("X Wins!");
		reset();
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
		alert("O Wins!");
		reset();
	} else if (turn === 9) {
		alert("Tie Game!");
		reset();
	}
}

function reset() {
	location.reload();
}
