const { get, getOne, post, put, remove } = require('../lib/request')

const listPrograms = async params => {
  return get('/program', params)
}

const listOpenPrograms = async params => {
  return get('/open/program', params)
}

const createProgram = async data => {
  return post('/program', data, true)
}

const detailProgram = async (id, params, jwt) => {
  return getOne(`/program/${id}`, params, jwt)
}

const detailOpenProgram = async params => {
  return getOne(`/open/program/detail`, params)
}

const updateProgram = async (id, data) => {
  return put(`/program/${id}`, data)
}

const removeProgram = async id => {
  return remove(`/program/${id}`)
}

module.exports = {
  listPrograms,
  createProgram,
  updateProgram,
  detailProgram,
  removeProgram,
  listOpenPrograms,
  detailOpenProgram
}