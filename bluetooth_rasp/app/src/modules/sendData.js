const axios = require('../config/axios')

const sendData = data => {
  let minor = data.iBeacon.minor
  let major = data.iBeacon.major

  axios.post('/bluetooth', { minor, major })
}

module.exports = sendData
