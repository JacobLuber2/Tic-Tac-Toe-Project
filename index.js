let tableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => {
  return document.getElementById(element.toString());
});
let board = document.getElementById("board");
board.style.display = "none";
let player1Submit = document.getElementById("submitplayer1");
let player2Submit = document.getElementById("submitplayer2");
let player1div = document.getElementById("player1div");
let player2div = document.getElementById("player2div");
player2div.style.display = "none";
player2Submit.style.display = "none"
let currentPlayer = "X";
let player1 = "";
let player2 = "";
let gameOver = false;
let resetBtn = document.getElementById("reset");
resetBtn.style.display = "none";
function checkPlayers() {
  if (player1 && player2) {
    board.style.display = "block";
    resetBtn.style.display = "block";
  }
}
player1Submit.addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  checkPlayers();
  player1Submit.remove();
  player1div.remove();
  player2div.style.display = "block";
player2Submit.style.display = "block"
});
player2Submit.addEventListener("click", () => {
  player2 = document.getElementById("player2").value;
  checkPlayers();
  player2Submit.remove();
  player2div.remove();
});
function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
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
let gameBoard = ["", "", "", "", "", "", "", "", ""];
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
    let combination = winCombinations[i];
    if (
      gameBoard[combination[0]] == gameBoard[combination[1]] &&
      gameBoard[combination[0]] == gameBoard[combination[2]] &&
      gameBoard[combination[0]] != ""
    ) {
      declareWinner();
      gameOver = true;
      winnerFound = true;
    }
  }
  if (winnerFound != true) {
    isTie();
  }
  if (winnerFound = true) {
  for (let x = 0; x < tableCells.length; x++) {
  if (tableCells[x].value = "") {
  
  }
  }
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
    console.log(`Neither ${player1} or ${player2} won`);
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
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  for (let index = 0; index < 9; index++) {
    tableCells[index].textContent = "";
  }
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X"
});
