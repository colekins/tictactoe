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
  console.log(store.user)
}

const signOutFail = function (error) {
  console.error(error)
  $('#message').text('Failed to sign out.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordSuccess,
  passwordFail,
  signOutSuccess,
  signOutFail
}
