const { get, getOne, post, put, remove } = require('../lib/request')

const listEvaluations = async params => {
  return get('/evaluations', params)
}

const listOpenEvaluations = async params => {
  return get('/open/evaluations', params)
}

const createEvaluation = async data => {
  return post('/evaluations', data, true)
}

const detailEvaluation = async (id, params, jwt) => {
  return getOne(`/evaluations/${id}`, params, jwt)
}

const detailOpenEvaluation = async params => {
  return getOne(`/open/evaluations/detail`, params)
}

const updateEvaluation = async (id, data) => {
  return put(`/evaluations/${id}`, data)
}

const removeEvaluation = async id => {
  return remove(`/evaluations/${id}`)
}

module.exports = {
  listEvaluations,
  createEvaluation,
  updateEvaluation,
  detailEvaluation,
  removeEvaluation,
  listOpenEvaluations,
  detailOpenEvaluation
}