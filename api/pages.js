const { get, getOne, post, put, remove } = require('../lib/request')

const listPages = async params => {
  return get('/pages', params)
}

const listOpenPages = async params => {
  return get('/open/pages', params)
}

const createPage = async data => {
  return post('/pages', data, true)
}

const detailPage = async (id, params, jwt) => {
  return getOne(`/pages/${id}`, params, jwt)
}

const detailOpenPage = async params => {
  return getOne(`/open/pages/detail`, params)
}

const updatePage = async (id, data) => {
  return put(`/pages/${id}`, data)
}

const removePage = async id => {
  return remove(`/pages/${id}`)
}

module.exports = {
  listPages,
  createPage,
  updatePage,
  detailPage,
  removePage,
  listOpenPages,
  detailOpenPage
}