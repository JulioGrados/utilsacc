'use strict'

const bcrypt = require('bcryptjs')
const { redirect } = require('./redirect')

const comparePass = (password, passwordDB) => {
  const passCorrect = bcrypt.compareSync(password, passwordDB)
  return passCorrect
}

const generateHash = password => {
  const saltRounds = 10
  const hash = bcrypt.hashSync(password, saltRounds)

  return hash
}

const isLoggedUser = async ctx => {
  if (!ctx.jwt) {
    redirect({ ctx, location: '/iniciar-sesion' })
    return null
  }

  return { jwt: ctx.jwt }
}

const isLoggedRole = async ctx => {
  const rol = ctx && ctx.currentUser && ctx.currentUser.rol
  console.log('rol', rol)
  if (rol === 'administrador') {
    return { jwt: ctx.jwt }
  } else {
    redirect({ ctx, location: '/iniciar-sesion' })
    return null
  }
}

module.exports = {
  comparePass,
  generateHash,
  isLoggedUser,
  isLoggedRole
}
