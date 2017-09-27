const indexJs = require('./index.js')
const gameBoard = indexJs.gameBoard

const updateBoard = function (divId) {
  indexJs.gameBoard.forEach(function (item, index) {
    if (item === divId) {
      indexJs.gameBoard[index] = indexJs.lastTurn
    }
  })
  console.log(gameBoard)
}

const checkBoard = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    console.log('scenario 1')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    console.log('scenario 2')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    console.log('scenario 3')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    console.log('scenario 4')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    console.log('scenario 5')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    console.log('scenario 6')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    console.log('scenario 7')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    console.log('scenario 8')
  }
}

const onPlayerMove = function () {
  if (this.textContent === 'O' || this.textContent === 'X') {
    return undefined
  } else if (indexJs.lastTurn === 'O') {
    this.textContent = 'X'
    indexJs.lastTurn = 'X'
  } else if (indexJs.lastTurn === 'X') {
    this.textContent = 'O'
    indexJs.lastTurn = 'O'
  }
  const divId = this.id
  updateBoard(divId)
  checkBoard()
  // console.log(this.id)
}

module.exports = {
  updateBoard,
  checkBoard,
  onPlayerMove
}
