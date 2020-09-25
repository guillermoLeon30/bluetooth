const { InfluxDB, Point } = require('@influxdata/influxdb-client')

const influxdb = class {
  constructor (url, username, password) {
    this.url = url // url: 'http://localhost:8086',
    this.username = username
    this.password = password
    this.influx = new InfluxDB({
      url: this.url,
      token: `${this.username}:${this.password}`
    })  
  }

  enviarInflux (dato, database, retentionPolicy) {
    const bucket = `${database}/${retentionPolicy}`
    let writeAPI = this.influx.getWriteApi('', bucket)
    
    writeAPI.writePoint(dato)
    writeAPI
      .close()
      .then(() => {})
      .catch(error => console.log(error))
  }
}

module.exports = influxdb