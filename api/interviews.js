const { get, getOne, post, put, remove } = require('../lib/request')

const listInterviews = async params => {
  return get('/interviews', params)
}

const listOpenInterviews = async params => {
  return get('/open/interviews', params)
}

const createInterview = async data => {
  return post('/interviews', data, true)
}

const detailInterview = async (id, params, jwt) => {
  return getOne(`/interviews/${id}`, params, jwt)
}

const detailOpenInterview = async params => {
  return getOne(`/open/interviews/detail`, params)
}

const updateInterview = async (id, data) => {
  return put(`/interviews/${id}`, data)
}

const removeInterview = async id => {
  return remove(`/interviews/${id}`)
}

module.exports = {
  listInterviews,
  createInterview,
  updateInterview,
  detailInterview,
  removeInterview,
  listOpenInterviews,
  detailOpenInterview
}