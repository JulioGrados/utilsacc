const { post } = require('../lib/request')

const login = (username, password) => {
  return post('/open/auth/login', { username, password })
}

const singup = (data) => {
  return post('/open/auth/singup', { ...data })
}

module.exports = {
  login,
  singup
}
