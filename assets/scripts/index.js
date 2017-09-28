'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const store = require('./store')
const api = require('./api')
const ui = require('./ui')

$(() => {
  setAPIOrigin(location, config)
})
let gameBoard = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8']
let lastTurn = 'O'

// each tictactoe square:
const divZero = document.querySelector('#d0')
const divOne = document.querySelector('#d1')
const divTwo = document.querySelector('#d2')
const divThree = document.querySelector('#d3')
const divFour = document.querySelector('#d4')
const divFive = document.querySelector('#d5')
const divSix = document.querySelector('#d6')
const divSeven = document.querySelector('#d7')
const divEight = document.querySelector('#d8')
// const gameSquare = document.querySelector('.col-xs-4')

let indexNum = ''
const updateBoard = function (divId) {
  gameBoard.forEach(function (item, index) {
    if (item === divId) {
      gameBoard[index] = lastTurn
      indexNum = index
    }
  })
  if (store.thisGame !== undefined) {
    events.updateGame(indexNum, lastTurn)
  }
  console.log(store.thisGame)
}

const winGame = function () {
  $('#message').text('Player ' + lastTurn + ' wins!!')
  if (store.thisGame !== undefined) {
    events.finishGame(indexNum, lastTurn)
  }
  divZero.removeEventListener('click', onPlayerMove)
  divOne.removeEventListener('click', onPlayerMove)
  divTwo.removeEventListener('click', onPlayerMove)
  divThree.removeEventListener('click', onPlayerMove)
  divFour.removeEventListener('click', onPlayerMove)
  divFive.removeEventListener('click', onPlayerMove)
  divSix.removeEventListener('click', onPlayerMove)
  divSeven.removeEventListener('click', onPlayerMove)
  divEight.removeEventListener('click', onPlayerMove)
}

const draw = function () {
  $('#message').text('Its a draw.')
  if (store.thisGame !== undefined) {
    events.finishGame(indexNum, lastTurn)
  }
  divZero.removeEventListener('click', onPlayerMove)
  divOne.removeEventListener('click', onPlayerMove)
  divTwo.removeEventListener('click', onPlayerMove)
  divThree.removeEventListener('click', onPlayerMove)
  divFour.removeEventListener('click', onPlayerMove)
  divFive.removeEventListener('click', onPlayerMove)
  divSix.removeEventListener('click', onPlayerMove)
  divSeven.removeEventListener('click', onPlayerMove)
  divEight.removeEventListener('click', onPlayerMove)
}

const checkBoard = function () {
  const xOrO = function (element) {
    return element.length <= 1
  }
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    winGame()
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    winGame()
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    winGame()
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    winGame()
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    winGame()
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    winGame()
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    winGame()
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    winGame()
  } else if (gameBoard.every(xOrO)) {
    draw()
  }
}

const onPlayerMove = function () {
  if (this.textContent === 'O' || this.textContent === 'X') {
    return undefined
  } else if (lastTurn === 'O') {
    this.textContent = 'X'
    lastTurn = 'X'
  } else if (lastTurn === 'X') {
    this.textContent = 'O'
    lastTurn = 'O'
  }
  const divId = this.id
  updateBoard(divId)
  checkBoard()
  // console.log(gameBoard)
  // console.log(this.id)
}
const reset = function () {
  gameBoard = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8']
  lastTurn = 'O'
  for (let i = 0; i < gameBoard.length; i++) {
    const current = document.querySelector('#d' + i)
    current.textContent = null
  }
  if (store.user !== undefined) {
    events.newGame()
  }
  divZero.addEventListener('click', onPlayerMove)
  divOne.addEventListener('click', onPlayerMove)
  divTwo.addEventListener('click', onPlayerMove)
  divThree.addEventListener('click', onPlayerMove)
  divFour.addEventListener('click', onPlayerMove)
  divFive.addEventListener('click', onPlayerMove)
  divSix.addEventListener('click', onPlayerMove)
  divSeven.addEventListener('click', onPlayerMove)
  divEight.addEventListener('click', onPlayerMove)
  $('#message').text(' ')
}

divZero.addEventListener('click', onPlayerMove)
divOne.addEventListener('click', onPlayerMove)
divTwo.addEventListener('click', onPlayerMove)
divThree.addEventListener('click', onPlayerMove)
divFour.addEventListener('click', onPlayerMove)
divFive.addEventListener('click', onPlayerMove)
divSix.addEventListener('click', onPlayerMove)
divSeven.addEventListener('click', onPlayerMove)
divEight.addEventListener('click', onPlayerMove)

const displayGame = function (gameBoard) {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === undefined) {
      gameBoard[i] = 'd' + [i]
    }
  } if (gameBoard[0] !== 'd0') {
    divZero.textContent = gameBoard[0]
  } if (gameBoard[1] !== 'd1') {
    divOne.textContent = gameBoard[1]
  } if (gameBoard[2] !== 'd2') {
    divTwo.textContent = gameBoard[2]
  } if (gameBoard[3] !== 'd3') {
    divThree.textContent = gameBoard[3]
  } if (gameBoard[4] !== 'd4') {
    divFour.textContent = gameBoard[4]
  } if (gameBoard[5] !== 'd5') {
    divFive.textContent = gameBoard[5]
  } if (gameBoard[6] !== 'd6') {
    divSix.textContent = gameBoard[6]
  } if (gameBoard[7] !== 'd7') {
    divSeven.textContent = gameBoard[7]
  } if (gameBoard[8] !== 'd8') {
    divThree.textContent = gameBoard[8]
  }
  // divOne.textContent = gameBoard[1]
  // divTwo.textContent = gameBoard[2]
  // divThree.textContent = gameBoard[3]
  // divFour.textContent = gameBoard[4]
  // divFive.textContent = gameBoard[5]
  // divSix.textContent = gameBoard[6]
  // divSeven.textContent = gameBoard[7]
  // divEight.textContent = gameBoard[8]
}
const loadGameSuccess = function (data) {
  store.thisGame = data
  gameBoard = data.game.cells
  displayGame(gameBoard)
}

const loadGame = function () {
  reset()
  const value = $('.gameSelector').val()
  api.indexGame(value)
    .then(loadGameSuccess)
  // for (let i = 0; i < gameBoard.length; i++) {
  //   if (gameBoard[i] === undefined) {
  //     gameBoard[i] = 'd' + [i]
  //   } else return gameBoard
  // }
  // displayGame(gameBoard)
}

$(() => {
  events.addHandlers()
  $('.reset').on('click', reset)
  $('.selectGame').on('click', loadGame)
})

module.exports = {
  reset,
  gameBoard,
  displayGame
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
