let tableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => {
    return document.getElementById(element.toString());
}); // visible gameboard
let board = document.getElementById("board"); // board container
board.style.display = "none";
// buttons for players to submit their names'
let player1Submit = document.getElementById("submitplayer1");
let player2Submit = document.getElementById("submitplayer2");
// input + button containers
let player1div = document.getElementById("player1div");
let player2div = document.getElementById("player2div");
// input + button containers for p2
player2div.style.display = "none";
player2Submit.style.display = "none";
// set game values'
let currentPlayer = "X";
let player1 = "";
let player2 = "";
let gameOver = false; /* reverts to true in the event of tie or winner then back to false upon resetting board */
let resetBtn = document.getElementById("reset");
resetBtn.style.display = "none";
function checkPlayers() {
    if (player1 && player2) {
        // shows game screen
        board.style.display = "inline";
        resetBtn.style.display = "inline";
    }
}
// event listeners when the username inputs are submitted
player1Submit.addEventListener("click", () => {
    let player1Input = document.getElementById("player1").value;
    if (player1Input.trim() === "") {
        window.alert("Username must have text, player1");
    } else {
        // player 1 screen
        player1 = document.getElementById("player1").value;
        checkPlayers();
        player1Submit.remove();
        player1div.remove();
        player2div.style.display = "inline";
        player2Submit.style.display = "inline";
    }
});
player2Submit.addEventListener("click", () => {
    let player2Input = document.getElementById("player2").value;
    if (player2Input.trim() === "") {
        window.alert("Username must have text, player2");
    } else {
        // player 2 screen
        player2 = document.getElementById("player2").value;
        checkPlayers();
        player2Submit.remove();
        player2div.remove();
    }
});
function changePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}
// sets text contents of the visible game board
tableCells.map((element) => {
    element.addEventListener("click", (event) => {
        if (gameOver == false) {
            if (element.textContent === "") {
                element.textContent = currentPlayer;
                fillBoard(event.target.id);
                checkWinner();
                changePlayer();
            }
        }
    });
});
let gameBoard = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]; /* internal gameboard, hidden */
function fillBoard(id) {
    gameBoard[id - 1] = currentPlayer;
}
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
function checkWinner() {
    let winnerFound = false;
    for (let i = 0; winCombinations.length > i; i++) {
        // loops over winning combinations
        let combination = winCombinations[i];
        if (
            gameBoard[combination[0]] == gameBoard[combination[1]] &&
            gameBoard[combination[0]] == gameBoard[combination[2]] &&
            gameBoard[combination[0]] != ""
            //  checks for matches against winCombinations array
        ) {
            declareWinner();
            gameOver = true;
            winnerFound = true;
        }
    }
    if (winnerFound != true) {
        // triggers in the event of a tie
        isTie();
    }
}
function isTie() {
    let filled = true;
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] == "") {
            filled = false;
        }
    }
    if (filled == true) {
        window.alert(`Neither ${player1} or ${player2} won`);
    }
}
function declareWinner() {
    if (currentPlayer === "X") {
        window.alert(`${player1} WON`);
    } else if (currentPlayer === "O") {
        window.alert(`${player2} WON`);
    }
}
resetBtn.addEventListener("click", () => {
    resetBoard();
});
function resetBoard() {
    // resets to starting game
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    for (let index = 0; index < 9; index++) {
        tableCells[index].textContent = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";
}
