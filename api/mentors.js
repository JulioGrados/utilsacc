const { get, getOne, post, put, remove } = require('../lib/request')

const listMentors = async params => {
  return get('/mentor', params)
}

const listOpenMentors = async params => {
  return get('/open/mentor', params)
}

const createMentor = async data => {
  return post('/mentor', data, true)
}

const detailMentor = async (id, params, jwt) => {
  return getOne(`/mentor/${id}`, params, jwt)
}

const detailOpenMentor = async params => {
  return getOne(`/open/mentor/detail`, params)
}

const updateMentor = async (id, data) => {
  return put(`/mentor/${id}`, data)
}

const removeMentor = async id => {
  return remove(`/mentor/${id}`)
}

module.exports = {
  listMentors,
  createMentor,
  updateMentor,
  detailMentor,
  removeMentor,
  listOpenMentors,
  detailOpenMentor
}