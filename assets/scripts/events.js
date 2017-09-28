const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
// const index = require('./index')

const getGames = function (data) {
  api.index(data)
    .then(ui.onGetGameSuccess)
}

const newGame = function () {
  api.create()
    .then(ui.onCreateSuccess)
}

const updateGame = function (indexNum, lastTurn) {
  const data = {
    game: {
      cell: {
        index: '',
        value: ''
      },
      over: false
    }
  }
  data.game.cell.index = indexNum
  data.game.cell.value = lastTurn
  api.update(data)
    .then(ui.onCreateSuccess)
}
const finishGame = function (indexNum, lastTurn) {
  const data = {
    game: {
      cell: {
        index: '',
        value: ''
      },
      over: true
    }
  }
  data.game.cell.index = indexNum
  data.game.cell.value = lastTurn
  api.update(data)
    .then(ui.onCreateSuccess)
}

// const loadGameEvent = function (data) {
//   const value = $('.gameSelector').val()
//   api.indexGame(value)
//     .then(ui.onLoadGameSuccess)
// }

// const onLoadGameSuccess = function (data) {
//   store.thisGame = data.game
//   // console.log(store.thisGame)
//   // const board = store.thisGame.cells
//   // index.displayGame(board)
// }

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(unhideSignOut)
    .then(hideSignIn)
    .then(getGames)
    .then(unhideGames)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.passwordSuccess)
    .catch(ui.passwordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(hideSignIn)
    .then(unhideSignOut)
    .then(unhideGames)
    .then(document.getElementById('sign-in').reset())
    .catch(ui.signOutFail)
}

const unhide = function () {
  $(this.parentElement.parentElement.children[1]).toggleClass('hidden unhidden')
  console.log(this.parentElement.parentElement.children[1])
}

const unhideSignOut = function () {
  $('.signOutButton').toggleClass('hidden unhidden')
  // console.log(parentElement)
}
const unhideGames = function () {
  $('.gameSelector').toggleClass('hidden unhidden')
  // console.log(parentElement)
}
const hideSignIn = function () {
  $('#sign-in').toggleClass('hidden unhidden')
  // console.log(parentElement)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.toggle').on('click', unhide)
}

module.exports = {
  addHandlers,
  updateGame,
  getGames,
  newGame,
  finishGame
  // loadGameEvent
}
