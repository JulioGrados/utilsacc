const { get, getOne, post, put, remove } = require('../lib/request')

const listQuestions = async params => {
  return get('/question', params)
}

const listOpenQuestions = async params => {
  return get('/open/question', params)
}

const createQuestion = async data => {
  return post('/question', data)
}

const detailQuestion = async (id, params, jwt) => {
  return getOne(`/question/${id}`, params, jwt)
}

const detailOpenQuestion = async params => {
  return getOne(`/open/question/detail`, params)
}

const updateQuestion = async (id, data) => {
  return put(`/question/${id}`, data)
}

const removeQuestion = async id => {
  return remove(`/question/${id}`)
}

module.exports = {
  listQuestions,
  createQuestion,
  updateQuestion,
  detailQuestion,
  removeQuestion,
  listOpenQuestions,
  detailOpenQuestion
}