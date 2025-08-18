const { get, getOne, post, put, remove } = require('../lib/request')

const listAllys = async params => {
  return get('/allys', params)
}

const listOpenAllys = async params => {
  return get('/open/allys', params)
}

const createAlly = async data => {
  return post('/allys', data, true)
}

const detailAlly = async (id, params, jwt) => {
  return getOne(`/allys/${id}`, params, jwt)
}

const detailOpenAlly = async params => {
  return getOne(`/open/allys/detail`, params)
}

const updateAlly = async (id, data) => {
  return put(`/allys/${id}`, data)
}

const removeAlly = async id => {
  return remove(`/allys/${id}`)
}

module.exports = {
  listAllys,
  createAlly,
  updateAlly,
  detailAlly,
  removeAlly,
  listOpenAllys,
  detailOpenAlly
}