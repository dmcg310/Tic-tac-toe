const gameboard = () => {
	const _board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	function displayBoard() {
		let turn = 1;
		let turnDisplay = document.querySelector(".turn-display");
		let cell = document.querySelectorAll(".board-display > div");
		let player = prompt("X or O?");

		turnDisplay.innerText = `${player}'s Turn`;
		for (i = 0; i < cell.length; i++) {
			cell[i].addEventListener("click", (e) => {
				if (e.target.innerText == "") {
					if (player === "O" && turn === 1) {
						turn += 1;
					}
					if (turn % 2 === 0) {
						console.log(turn);
						e.target.innerText = "O";
						turnDisplay.innerText = `${player}'s Turn`;
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
