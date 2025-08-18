const { get, getOne, post, put, remove } = require('../lib/request')

const listInitiatives = async params => {
  console.log('entrooo')
  return get('/initiatives', params)
}

const listOpenInitiatives = async params => {
  return get('/open/initiatives', params)
}

const createInitiative = async data => {
  return post('/initiatives', data, true)
}

const detailInitiative = async (id, params, jwt) => {
  return getOne(`/initiatives/${id}`, params, jwt)
}

const detailOpenInitiative = async params => {
  return getOne(`/open/initiatives/detail`, params)
}

const updateInitiative = async (id, data) => {
  return put(`/initiatives/${id}`, data)
}

const removeInitiative = async id => {
  return remove(`/initiatives/${id}`)
}

module.exports = {
  listInitiatives,
  createInitiative,
  updateInitiative,
  detailInitiative,
  removeInitiative,
  listOpenInitiatives,
  detailOpenInitiative
}