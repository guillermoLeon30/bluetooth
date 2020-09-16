const { Point } = require('@influxdata/influxdb-client')
const BeaconScanner = require("node-beacon-scanner")

const influxDB = require('./modules/influxdb')
const getData = require('./modules/getData')
const { url, password, username } = require('./config/influx')

const scanner = new BeaconScanner()
const influx = new influxDB(url, username, password)

scanner.onadvertisement = (advertisement) => {
  const { id, temp, rh } = getData(advertisement)

  const punto = new Point('ti_temp_hum')
    .tag('id', id)
    .floatField('temperatura', temp)
    .floatField('humedad', rh)

  influx.enviarInflux(punto, 'telconet', 'una_hora')

  console.log(`major: ${id} - temp: ${temp}°C - rh: ${rh}%`)
}

scanner.startScan().then(() => {
  console.log("Escaneando Beacons...")
}).catch((error) => {
  console.error(error)
})
