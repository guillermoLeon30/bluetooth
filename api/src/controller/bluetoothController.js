const { Point } = require('@influxdata/influxdb-client')

const influxDB = require('../providers/influxdb')

// Guarda la informacion de temperatura y humedad en la base influxDB
exports.postData = (req, res, next) => {
  let { id, temp, rh } = req.body

  const punto = new Point('ti_temp_hum')
    .tag('id', id)
    .floatField('temperatura', temp)
    .floatField('humedad', rh)

  influxDB.enviarInflux(punto, 'telconet', 'una_hora')
    .then(() => res.json({ msg: 'ok' }))
    .catch(error => next(error))
}
