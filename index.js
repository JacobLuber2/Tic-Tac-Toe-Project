let tableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => { return document.getElementById(element.toString()) });
let board = document.getElementById("board")
board.style.display = "none";
let player1Submit = document.getElementById("submitplayer1");
let player2Submit = document.getElementById("submitplayer2");
let player1div = document.getElementById("player1div");
let player2div = document.getElementById("player2div");
let currentPlayer = "X";
let player1 = "";
let player2 = "";
function checkPlayers() {
if(player1 && player2) {
board.style.display = "block";
}
}
player1Submit.addEventListener("click", () => {
    player1 = document.getElementById("player1").value;
    checkPlayers();
    player1Submit.remove();
    player1div.remove();
})
player2Submit.addEventListener("click", () => {
    player2 = document.getElementById("player2").value;
    checkPlayers();
    player2Submit.remove();
    player2div.remove();
})
function changePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X";
    };
};
tableCells.map((element) => {
    element.addEventListener("click", (event) => {
        console.log(event.target.id)
        if (element.textContent === "") {
            element.textContent = currentPlayer
            fillBoard(event.target.id)
            checkWinner();
            changePlayer();

        };
    });
});
let gameBoard = ["", "", "", "", "", "", "", "", "",]
function fillBoard(id) {
gameBoard[id - 1] = currentPlayer
console.log(gameBoard)
}
const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];
function checkWinner() {
for(let i = 0; winCombinations.length > i; i++) {
let combination = winCombinations[i]
if(gameBoard[combination[0]] == gameBoard[combination[1]] && gameBoard[combination[0]] == gameBoard[combination[2]] && gameBoard[combination[0]] != "") {
declareWinner()
for(let index = 0; index < 9; index++) {
tableCells[index].textContent = "";
}
gameBoard = ["", "", "", "", "", "", "", "", ""]
}
}
}
function declareWinner() {
if(currentPlayer === "X") {
window.alert(`${player1} WON`)
}
else {
window.alert(`${player2} WON`)
}
}