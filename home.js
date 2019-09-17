var turncounter = 1;
var activeGame = 0;
var game1tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game2tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game3tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game4tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game5tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game6tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game7tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game8tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var game9tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var wholeGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, false];
var user = getRandomNumber(1, 2);
if (getParameterByName("player1") === null) {
	window.location.href = "intro.html";
} else {
	if (user === 1) {
		var noughts = getParameterByName("player1");
		var crosses = getParameterByName("player2");
	} else {
		var noughts = getParameterByName("player2");
		var crosses = getParameterByName("player1");
	}
	document.getElementById("output").innerHTML = crosses + " to go first";
}

function populateTD(cell) {
	var cellID = cell.id;
	var game = parseInt(cellID.substring(1, 2));
	if (wholeGame[activeGame - 1] !== 0) {
		activeGame = game;
		// changeBorderColor("game" + activeGame, "red");
	}
	var quadrant = parseInt(cellID.substring(3, 4));
	if (turncounter !== 1) {
		if (game !== activeGame) {
			document.getElementById("output").innerHTML = "Invalid Move: You must play in game square " + activeGame;
		} else {
			document.getElementById("output").innerHTML = "";
			changeBorderColor("game" + activeGame, "black");
			activeGame = quadrant;
			changeBorderColor("game" + activeGame, "red");
			if (cell.innerHTML === "") {
				if (isEven(turncounter)) {
					cell.innerHTML = 'O';
					updateGameArray(game, quadrant, 'O');
					turncounter++;
					document.getElementById("output").innerHTML = crosses + " turn";
					if (wholeGame[9] === true) {
						document.getElementById("output").innerHTML = crosses + " wins";
					} else if (wholeGame[9] === "draw") {
						document.getElementById("output").innerHTML = "DRAW";
					} else if (wholeGame[9] === false) {
						if (wholeGame[9] === true) {
							document.getElementById("output").innerHTML = noughts + " wins";
						}
					}
				} else {
					cell.innerHTML = 'X';
					updateGameArray(game, quadrant, 'X');
					turncounter++;
					document.getElementById("output").innerHTML = noughts + " turn";
					if (wholeGame[9] === true) {
						document.getElementById("output").innerHTML = "X wins";
					} else if (wholeGame[9] === "draw") {
						document.getElementById("output").innerHTML = "DRAW wins";
					} else if (wholeGame[9] === false) {
						if (wholeGame[9] === true) {
							document.getElementById("output").innerHTML = "O wins";
						}
					}
				}
			} else {
				return;
			}
		}
	} else {
		document.getElementById("output").innerHTML = "";
		activeGame = quadrant;
		changeBorderColor("game" + activeGame, "red");
		if (cell.innerHTML === "") {
			if (isEven(turncounter)) {
				cell.innerHTML = 'O';
				updateGameArray(game, quadrant, 'O');
				turncounter++;
				document.getElementById("output").innerHTML = crosses + " turn";
			} else {
				cell.innerHTML = 'X';
				updateGameArray(game, quadrant, 'X');
				turncounter++;
				document.getElementById("output").innerHTML = noughts + " turn";
			}
		} else {
			return;
		}
	}
}

function isEven(n) {
	return n % 2 == 0;
}

function updateGameArray(game, quadrant, tictactoe) {
	if (game === 1) {
		game1tracker[quadrant - 1] = tictactoe;
		calculateResult(game1tracker, tictactoe);
		if (game1tracker[9] === true) {
			document.getElementById("game1").innerHTML = tictactoe;
			wholeGame[0] = tictactoe;
			checkWholeGame();
		} else if (game1tracker[9] === "draw") {
			document.getElementById("game1").innerHTML = "+";
		}
	} else if (game === 2) {
		game2tracker[quadrant - 1] = tictactoe;
		calculateResult(game2tracker, tictactoe);
		if (game2tracker[9] === true) {
			document.getElementById("game2").innerHTML = tictactoe;
			wholeGame[1] = tictactoe;
			checkWholeGame();
		} else if (game2tracker[9] === "draw") {
			document.getElementById("game2").innerHTML = "+";
		}
	} else if (game === 3) {
		game3tracker[quadrant - 1] = tictactoe;
		calculateResult(game3tracker, tictactoe);
		if (game3tracker[9] === true) {
			document.getElementById("game3").innerHTML = tictactoe;
			wholeGame[2] = tictactoe;
			checkWholeGame();
		} else if (game3tracker[9] === "draw") {
			document.getElementById("game3").innerHTML = "+";
		}
	} else if (game === 4) {
		game4tracker[quadrant - 1] = tictactoe;
		calculateResult(game4tracker, tictactoe);
		if (game4tracker[9] === true) {
			document.getElementById("game4").innerHTML = tictactoe;
			wholeGame[3] = tictactoe;
			checkWholeGame();
		} else if (game4tracker[9] === "draw") {
			document.getElementById("game4").innerHTML = "+";
		}
	} else if (game === 5) {
		game5tracker[quadrant - 1] = tictactoe;
		calculateResult(game5tracker, tictactoe);
		if (game5tracker[9] === true) {
			document.getElementById("game5").innerHTML = tictactoe;
			wholeGame[4] = tictactoe;
			checkWholeGame();
		} else if (game5tracker[9] === "draw") {
			document.getElementById("game5").innerHTML = "+";
		}
	} else if (game === 6) {
		game6tracker[quadrant - 1] = tictactoe;
		calculateResult(game6tracker, tictactoe);
		if (game6tracker[9] === true) {
			document.getElementById("game6").innerHTML = tictactoe;
			wholeGame[5] = tictactoe;
			checkWholeGame();
		} else if (game6tracker[9] === "draw") {
			document.getElementById("game6").innerHTML = "+";
		}
	} else if (game === 7) {
		game7tracker[quadrant - 1] = tictactoe;
		calculateResult(game7tracker, tictactoe);
		if (game7tracker[9] === true) {
			document.getElementById("game7").innerHTML = tictactoe;
			wholeGame[6] = tictactoe;
			checkWholeGame();
		} else if (game7tracker[9] === "draw") {
			document.getElementById("game7").innerHTML = "+";
		}
	} else if (game === 8) {
		game8tracker[quadrant - 1] = tictactoe;
		calculateResult(game8tracker, tictactoe);
		if (game8tracker[9] === true) {
			document.getElementById("game8").innerHTML = tictactoe;
			wholeGame[7] = tictactoe;
			checkWholeGame();
		} else if (game8tracker[9] === "draw") {
			document.getElementById("game8").innerHTML = "+";
		}
	} else if (game === 9) {
		game9tracker[quadrant - 1] = tictactoe;
		calculateResult(game9tracker, tictactoe);
		if (game9tracker[9] === true) {
			document.getElementById("game9").innerHTML = tictactoe;
			wholeGame[8] = tictactoe;
			checkWholeGame();
		} else if (game9tracker[9] === "draw") {
			document.getElementById("game9").innerHTML = "+";
		}
	}
}

function calculateResult(gameArray, tictactoe) {
	if (gameArray[0] === tictactoe && gameArray[1] === tictactoe && gameArray[2] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[3] === tictactoe && gameArray[4] === tictactoe && gameArray[5] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[6] === tictactoe && gameArray[7] === tictactoe && gameArray[8] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[0] === tictactoe && gameArray[3] === tictactoe && gameArray[6] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[1] === tictactoe && gameArray[4] === tictactoe && gameArray[7] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[2] === tictactoe && gameArray[5] === tictactoe && gameArray[8] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[0] === tictactoe && gameArray[4] === tictactoe && gameArray[8] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (gameArray[2] === tictactoe && gameArray[4] === tictactoe && gameArray[6] === tictactoe) {
		gameArray[9] = true;
		return 1;
	} else if (!gameArray.includes(0)) {
		gameArray[9] = "draw";
		return 1;
	} else {
		return 1;
	}
}

function checkWholeGame() {
	calculateResult(wholeGame, "X");
	calculateResult(wholeGame, "O");
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getRandomNumber(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	return random;
}

function changeBorderColor(tableName, colour) {
	var table = document.getElementById(tableName).getElementsByTagName("td");
	for (var i = 0; i < table.length; i++) {
		var td = table[i];
		td.style.borderColor = colour;
	}
}
