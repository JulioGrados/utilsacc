const { get, getOne, post, put, remove } = require('../lib/request')

const listTasks = async params => {
  return get('/task', params)
}

const listOpenTasks = async params => {
  return get('/open/task', params)
}

const createTask = async data => {
  return post('/task', data)
}

const detailTask = async (id, params, jwt) => {
  return getOne(`/task/${id}`, params, jwt)
}

const detailOpenTask = async params => {
  return getOne(`/open/task/detail`, params)
}

const updateTask = async (id, data) => {
  return put(`/task/${id}`, data)
}

const removeTask = async id => {
  return remove(`/task/${id}`)
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  detailTask,
  removeTask,
  listOpenTasks,
  detailOpenTask
}