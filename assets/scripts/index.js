'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

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

const updateBoard = function (divId) {
  gameBoard.forEach(function (item, index) {
    if (item === divId) {
      gameBoard[index] = lastTurn
    }
  })
  // console.log(gameBoard)
}

const winGame = function () {
  $('#message').text('Player ' + lastTurn + ' wins!!')
}

const checkBoard = function () {
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
  console.log(gameBoard)
  // console.log(this.id)
}
const reset = function () {
  gameBoard = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8']
  lastTurn = 'O'
  for (let i = 0; i < gameBoard.length; i++) {
    const current = document.querySelector('#d' + i)
    current.textContent = null
  }
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

$(() => {
  events.addHandlers()
  $('.reset').on('click', reset)
})

// module.exports = {
//   reset
// }

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
