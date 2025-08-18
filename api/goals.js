const { get, getOne, post, put, remove } = require('../lib/request')

const listGoals = async params => {
  return get('/goals', params)
}

const listOpenGoals = async params => {
  return get('/open/goals', params)
}

const createGoal = async data => {
  return post('/goals', data, true)
}

const detailGoal = async (id, params, jwt) => {
  return getOne(`/goals/${id}`, params, jwt)
}

const detailOpenGoal = async params => {
  return getOne(`/open/goals/detail`, params)
}

const updateGoal = async (id, data) => {
  return put(`/goals/${id}`, data)
}

const removeGoal = async id => {
  return remove(`/goals/${id}`)
}

module.exports = {
  listGoals,
  createGoal,
  updateGoal,
  detailGoal,
  removeGoal,
  listOpenGoals,
  detailOpenGoal
}