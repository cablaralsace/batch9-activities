const xClass = "x";
const oClass = "o";
const WINNING_COMBINATIONS = [
  //horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");

//Winning Message Constants
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);

//Control Buttons
const restartButton = document.getElementById('restartButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

let oTurn;
let winner = false;

let gameTurn = [];
let row;
let col;

let boardState = [];
let history = [];
let gameState = [
  ['','',''],
  ['','',''],
  ['','','']
];

let gameHistory= [];
let previousState= [];

startGame();

// Alternate function for restartButton ---- Reload page
// restartButton.addEventListener('click', () => {
//   window.location.reload();
// });

/// CONTROL BUTTONS
restartButton.addEventListener('click', startGame);
previousButton.addEventListener('click', showLast);
nextButton.addEventListener('click', showNext);

function startGame() {  
  oTurn = false;
  winner = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(oClass);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });

  setBoardHoverClass();
  winningMessageElement.classList.remove('color');
  winningMessageTextElement.innerText = `${oTurn ? "Player O's" : "Player X's"} Turn`;
  winningMessageElement.classList.add("show");

  clearHistory();
  previousButton.style.visibility = 'hidden';
  nextButton.style.visibility = 'hidden';
}

function clearHistory() {
  //reset boardState ang gameHistory 1D array
  while(boardState.length > 0 && gameHistory.length > 0 && previousState.length > 0) {
    boardState=[];
    gameHistory=[];
    previousState=[];
  }
  //reset gameState 2D array
  for (history of gameState) {
    for (let i=0; i<history.length; i++) {
      history[i]='';  
    }
  }
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? oClass : xClass;
  const clickedCellIndex = parseInt(cell.getAttribute('data-cell-index')); //data cell index 0-8
  gameTurn=[]; //empty array para every click marerefresh and di lang yung latest data makukuha

    if (winner === false) {
    placeMark(cell, currentClass); 

    //check boardState and gameState
    gameTurn.index = clickedCellIndex; //tracks kung anong index ng cell yung na-click
    gameTurn.class = currentClass; //tracks kung X or O ba yung laman ng cell
    // gameTurn.cell = cell; //tracks yung mismong cell na nilagyan ng X or O na class
  
    boardState.push(currentClass); //makes an array of XOXO pero walang specific index
    // console.log(boardState); 

    gameHistory.push(gameTurn); // puts into an array yung index and class
    // console.log(gameHistory);
    
  
    if (gameTurn.index>=0 && gameTurn.index<=2) { //row: 0, col: 0,1,2
      row=0;
      col=gameTurn.index;
    } 
    
    else if (gameTurn.index>=3 && gameTurn.index<=5) { //row: 0, col: 3,4,5 - 3 = 0,1,2
      row=1;
      col=gameTurn.index-3;
    }
    
    else { //row: 0, col: 6,7,8 - 6 = 0,1,2
      row=2;
      col=gameTurn.index-6;
    }

    gameState[row][col]=currentClass; //places X or O kung saang row or col siya nalagay
    console.log(gameState); //shows X or O with specific index
    
    //Check for Win or Draw
    if (checkWin(currentClass)) { //may winner na either X or O
      endGame(false);
      winner = true;
      previousButton.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';
    } else if (isDraw()) { //draw ung game
      endGame(true);
      previousButton.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';
    } else { //magpapalit ng X or O and may show hover
      swapTurns();
      setBoardHoverClass();
    }
  }
}

function endGame(draw) {
  if (draw) { //display text pag Draw
    winningMessageElement.classList.add('color');
    winningMessageTextElement.innerText = "Draw!"
  } else { //display text pag X or O panalo
    winningMessageElement.classList.add('color');
    winningMessageTextElement.innerText = `Congratulations! ${oTurn ? "Player O" : "Player X"} Wins!`;
    board.classList.remove(xClass);
    board.classList.remove(oClass);
  }

  winningMessageElement.classList.add("show");
}


function isDraw () { //checks kung may laman lahat ng cells
 return [...cellElements].every(cell => {
   return cell.classList.contains(xClass) || cell.classList.contains(oClass); //checks kung may laman na either X or O
 })
}


function placeMark(cell, currentClass) { 
  if (winner===false) { //if wala pang winner, place lang nang place nang mark
    cell.classList.add(currentClass);
  } 
}


function swapTurns() { 
  oTurn = !oTurn; //after o, swap x, vice-versa
  winningMessageTextElement.innerText = `${oTurn ? "Player O's" : "Player X's"} Turn`; //shows Player Turn as well
  winningMessageElement.classList.add("show");
}

function setBoardHoverClass() { //hover X or O as long as di pa tapos yung laro or wala pang winner/draw
  board.classList.remove(xClass);
  board.classList.remove(oClass);

  if (oTurn) {
    board.classList.add(oClass);
  } else {
    board.classList.add(xClass);
  }
}

function checkWin(currentClass) { 
  return WINNING_COMBINATIONS.some((combination) => { //checks winning combinations array 
    return combination.every((index) => { //kung may laman na X or O lahat ng winning combination indices
      return cellElements[index].classList.contains(currentClass); //and kung pare-pareho ba yung laman nung tumamang combination
    });
  });
}




function showLast() {
  if (gameHistory.length != 0 ) {
  let lastMove = gameHistory[gameHistory.length - 1];
    previousState.push(lastMove);
    gameHistory.pop();
    cellElements[lastMove.index].classList.remove(lastMove.class);
  }

  if (gameHistory.length === 0) {
    previousButton.style.visibility = 'hidden';
    nextButton.style.visibility = 'visible';
  }
}

function showNext() {
  if (previousState.length != 0) {
  let nextMove = previousState[previousState.length - 1];
      gameHistory.push(nextMove);
      previousState.pop();
  cellElements[nextMove.index].classList.add(nextMove.class);
  }

  if (previousState.length === 0) {
    previousButton.style.visibility = 'visible';
    nextButton.style.visibility = 'hidden';
  }
}