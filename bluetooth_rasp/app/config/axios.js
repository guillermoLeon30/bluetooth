const Axios = require('axios')

const url = process.env.URL_API || 'http://192.168.100.100'
const port = process.env.PUERTO || '4000'

const axios = Axios.create({
  baseURL: `${url}:${port}`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

module.exports = axios
