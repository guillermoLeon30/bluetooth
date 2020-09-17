const InfluxDB = require('../modules/influxdb')
const { url, username, password } = require('../config/influx')

const influx = new InfluxDB(url, username, password)

module.exports = influx
