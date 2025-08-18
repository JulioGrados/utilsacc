const { get, getOne, post, put, remove } = require('../lib/request')

const listComments = async params => {
  return get('/comments', params)
}

const listOpenComments = async params => {
  return get('/open/comments', params)
}

const createComment = async data => {
  console.log('data', data)
  return post('/comments', data, true)
}

const detailComment = async (id, params, jwt) => {
  return getOne(`/comments/${id}`, params, jwt)
}

const detailOpenComment = async params => {
  return getOne(`/open/comments/detail`, params)
}

const updateComment = async (id, data) => {
  return put(`/comments/${id}`, data)
}

const removeComment = async id => {
  return remove(`/comments/${id}`)
}

module.exports = {
  listComments,
  createComment,
  updateComment,
  detailComment,
  removeComment,
  listOpenComments,
  detailOpenComment
}