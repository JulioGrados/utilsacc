const config = require('config')

let MEDIA_PATH
if (process.env.NODE_ENV === 'production') {
  MEDIA_PATH = 'https://api.incubaunt.com'
} else {
  MEDIA_PATH = 'http://localhost:8001'
}

module.exports = {
  MEDIA_PATH
}
