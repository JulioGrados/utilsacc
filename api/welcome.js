const { get, getOne, post, put, remove } = require('../lib/request')

const listWelcomes = async params => {
  return get('/welcome', params)
}

const listOpenWelcomes = async params => {
  return get('/open/welcome', params)
}

const createWelcome = async data => {
  return post('/welcome', data)
}

const detailWelcome = async (id, params, jwt) => {
  return getOne(`/welcome/${id}`, params, jwt)
}

const detailOpenWelcome = async params => {
  return getOne(`/open/welcome/detail`, params)
}

const updateWelcome = async (id, data) => {
  return put(`/welcome/${id}`, data)
}

const removeWelcome = async id => {
  return remove(`/welcome/${id}`)
}

module.exports = {
  listWelcomes,
  createWelcome,
  updateWelcome,
  detailWelcome,
  removeWelcome,
  listOpenWelcomes,
  detailOpenWelcome
}