const { get, getOne, post, put, remove } = require('../lib/request')

const listTeams = async params => {
  return get('/equipos', params)
}

const listOpenTeams = async params => {
  return get('/open/equipos', params)
}

const createTeam = async data => {
  return post('/equipos', data, true)
}

const detailTeam = async (id, params, jwt) => {
  return getOne(`/equipos/${id}`, params, jwt)
}

const detailOpenTeam = async params => {
  return getOne(`/open/equipos/detail`, params)
}

const updateTeam = async (id, data) => {
  return put(`/equipos/${id}`, data)
}

const removeTeam = async id => {
  return remove(`/equipos/${id}`)
}

module.exports = {
  listTeams,
  createTeam,
  updateTeam,
  detailTeam,
  removeTeam,
  listOpenTeams,
  detailOpenTeam
}