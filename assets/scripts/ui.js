const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('You are now signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up.')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('You are now signed in.')
  store.user = data.user
  // console.log(store.user)
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Incorrect username or password.')
}
const passwordSuccess = function () {
  console.log('Success')
  $('#message').text('Success.')
}

const passwordFail = function (error) {
  console.error(error)
  $('#message').text('Fail.')
}

const signOutSuccess = function () {
  console.log('Signed Out')
  $('#message').text('You are now signed out.')
  store.user = null
  // console.log(store.user)
}

const signOutFail = function (error) {
  console.error(error)
  $('#message').text('Failed to sign out.')
}

const onGetGameSuccess = function (data) {
  store.games = data.games
  const gameList = []
  console.log(store.games)
  for (let i = 0; i < store.games.length; i++) {
    gameList.push(store.games[i].id)
    $('.gameSelector option:first').after('<option>' + store.games[i].id + '</option>')
  }
  console.log(gameList)
}

const onCreateSuccess = function (data) {
  store.thisGame = data.game
  console.log(store.thisGame)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordSuccess,
  passwordFail,
  signOutSuccess,
  signOutFail,
  onGetGameSuccess,
  onCreateSuccess
}
