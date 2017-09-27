'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./store')

$(() => {
  setAPIOrigin(location, config)
})
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
