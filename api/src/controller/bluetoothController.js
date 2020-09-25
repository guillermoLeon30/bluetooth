const { Point } = require('@influxdata/influxdb-client')

const influxDB = require('../providers/influxdb')
const getDataCypressBeacon = require('../modules/getDataCypressBeacon')

// Guarda la informacion de temperatura y humedad en la base influxDB
exports.postData = (req, res, next) => {
  let { minor, major } = req.body

  const { id, temp, rh } = getDataCypressBeacon(minor, major)

  const punto = new Point('ti_temp_hum')
    .tag('id', id)
    .floatField('temperatura', temp)
    .floatField('humedad', rh)

  influxDB.enviarInflux(punto, 'telconet', 'una_hora')
    .then(() => res.json({ msg: 'ok' }))
    .catch(error => next(error))
}
