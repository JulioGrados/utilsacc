const { get, getOne, post, put, remove } = require('../lib/request')

const listPortfolios = async params => {
  return get('/portfolios', params)
}

const listOpenPortfolios = async params => {
  return get('/open/portfolios', params)
}

const createPortfolio = async data => {
  return post('/portfolios', data, true)
}

const detailPortfolio = async (id, params, jwt) => {
  return getOne(`/portfolios/${id}`, params, jwt)
}

const detailOpenPortfolio = async params => {
  return getOne(`/open/portfolios/detail`, params)
}

const updatePortfolio = async (id, data) => {
  return put(`/portfolios/${id}`, data)
}

const removePortfolio = async id => {
  return remove(`/portfolios/${id}`)
}

module.exports = {
  listPortfolios,
  createPortfolio,
  updatePortfolio,
  detailPortfolio,
  removePortfolio,
  listOpenPortfolios,
  detailOpenPortfolio
}